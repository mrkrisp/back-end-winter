/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
import { hash } from 'argon2'
import { Role } from '../prisma/generated/enums'
import { popularRecipes, recommendedRecipes } from './recipe-seed.data'
import type { ISeedRecipe } from './seed.types'

import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaClient } from 'prisma/generated/client'

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

async function ensureLikerPool(maxLikesCount: number) {
	const likerEmails = Array.from({ length: maxLikesCount }, (_, index) => ({
		email: `seed.liker.${index + 1}@flavorfit.com`,
		password: 'seed-liked-password'
	}))

	const hashedPassword = await hash('seed-liked-password')

	await prisma.user.createMany({
		data: likerEmails.map(item => ({
			email: item.email,
			password: hashedPassword,
			role: Role.USER,
			isEmailVerified: true
		})),
		skipDuplicates: true
	})

	const users = await prisma.user.findMany({
		where: {
			email: {
				startsWith: 'seed.liker.'
			}
		},
		select: {
			id: true,
			email: true
		},
		orderBy: {
			email: 'asc'
		}
	})

	return users.map(user => user.id)
}

function buildIngredientCreateData(
	item: ISeedRecipe['recipeIngredients'][number]
) {
	const slug = item.name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')

	return {
		name: item.name,
		description: `${item.name} ingredient`,
		iconUrl: `/images/ingredients/${slug}.png`,
		price: 1.99
	}
}

async function ensureIngredientId(
	item: ISeedRecipe['recipeIngredients'][number]
) {
	const existingIngredient = await prisma.ingredient.findFirst({
		where: {
			name: item.name
		},
		select: {
			id: true
		}
	})

	if (existingIngredient) {
		return existingIngredient.id
	}

	const createdIngredient = await prisma.ingredient.create({
		data: buildIngredientCreateData(item),
		select: {
			id: true
		}
	})

	return createdIngredient.id
}

async function upsertRecipe(recipe: ISeedRecipe, authorId: string) {
	const recipeIngredients = await Promise.all(
		recipe.recipeIngredients.map(async item => ({
			quantity: item.quantity,
			unit: item.unit,
			ingredient: {
				connect: {
					id: await ensureIngredientId(item)
				}
			}
		}))
	)

	return prisma.recipe.upsert({
		where: {
			slug: recipe.slug
		},
		update: {
			title: recipe.title,
			description: recipe.description,
			image: recipe.image,
			calories: recipe.calories,
			cookingTime: recipe.cookingTime,
			difficulty: recipe.difficulty,
			mealType: recipe.mealType,
			dietaryPreference: recipe.dietaryPreference,
			healthGoal: recipe.healthGoal,
			cuisine: recipe.cuisine,
			specialOccasion: recipe.specialOccasion,
			views: recipe.views,

			tags: {
				set: [],
				connectOrCreate: recipe.tags.map(tag => ({
					where: { name: tag },
					create: { name: tag }
				}))
			},

			nutritionFact: {
				upsert: {
					create: {
						proteins: recipe.nutritionFact.proteins,
						fats: recipe.nutritionFact.fats,
						carbohydrates: recipe.nutritionFact.carbohydrates,
						fiber: recipe.nutritionFact.fiber
					},
					update: {
						proteins: recipe.nutritionFact.proteins,
						fats: recipe.nutritionFact.fats,
						carbohydrates: recipe.nutritionFact.carbohydrates,
						fiber: recipe.nutritionFact.fiber
					}
				}
			},

			recipeSteps: {
				deleteMany: {},
				create: recipe.recipeSteps.map(step => ({
					order: step.order,
					title: step.title,
					description: step.description
				}))
			},

			recipeIngredients: {
				deleteMany: {},
				create: recipeIngredients
			}
		},
		create: {
			slug: recipe.slug,
			title: recipe.title,
			description: recipe.description,
			image: recipe.image,
			calories: recipe.calories,
			cookingTime: recipe.cookingTime,
			difficulty: recipe.difficulty,
			mealType: recipe.mealType,
			dietaryPreference: recipe.dietaryPreference,
			healthGoal: recipe.healthGoal,
			cuisine: recipe.cuisine,
			specialOccasion: recipe.specialOccasion,
			views: recipe.views,
			authorId,

			tags: {
				connectOrCreate: recipe.tags.map(tag => ({
					where: { name: tag },
					create: { name: tag }
				}))
			},

			nutritionFact: {
				create: {
					proteins: recipe.nutritionFact.proteins,
					fats: recipe.nutritionFact.fats,
					carbohydrates: recipe.nutritionFact.carbohydrates,
					fiber: recipe.nutritionFact.fiber
				}
			},

			recipeSteps: {
				create: recipe.recipeSteps.map(step => ({
					order: step.order,
					title: step.title,
					description: step.description
				}))
			},

			recipeIngredients: {
				create: recipeIngredients
			}
		}
	})
}

async function syncRecipeLikes(
	recipeId: string,
	likesCount: number,
	likerIds: string[]
) {
	await prisma.like.deleteMany({
		where: {
			recipeId
		}
	})

	if (likesCount <= 0) return

	await prisma.like.createMany({
		data: likerIds.slice(0, likesCount).map(userId => ({
			userId,
			recipeId
		})),
		skipDuplicates: true
	})
}

async function seedRecipes(authorId: string, likerIds: string[]) {
	const recommendedSorted = [...recommendedRecipes].sort(
		(a, b) => b.likesCount - a.likesCount
	)

	const popularSorted = [...popularRecipes].sort((a, b) => b.views - a.views)

	const allRecipes = [...recommendedSorted, ...popularSorted]

	for (const recipe of allRecipes) {
		const createdRecipe = await upsertRecipe(recipe, authorId)
		await syncRecipeLikes(createdRecipe.id, recipe.likesCount, likerIds)
	}
}

async function main() {
	const authorId = 'cmo5o0ea200003su6m32hdfcx'

	const allRecipes = [...recommendedRecipes, ...popularRecipes]
	const maxLikesCount = Math.max(...allRecipes.map(recipe => recipe.likesCount))

	const likerIds = await ensureLikerPool(maxLikesCount)

	await seedRecipes(authorId, likerIds)

	console.log('Seed completed successfully')
}

main()
	.then(async () => {
		await prisma.$disconnect()

		await pool.end()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		await pool.end()
		process.exit(1)
	})
