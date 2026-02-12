import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RecipeCreateInput, RecipeUpdateInput } from './inputs/recipe.input'

@Injectable()
export class AdminRecipesService {
	constructor(private readonly prisma: PrismaService) {}

	async getAllAdmin() {
		return this.prisma.recipe.findMany({
			include: {
				tags: true,
				nutritionFact: true,
				recipeIngredients: {
					include: {
						ingredient: true
					}
				},
				recipeSteps: true,
				_count: {
					select: { likes: true }
				},
				comments: true
			}
		})
	}

	async findById(id: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { id },
			include: {
				nutritionFact: true,
				recipeIngredients: true,
				recipeSteps: true,
				comments: true
			}
		})

		if (!recipe) throw new NotFoundException('Recipe was not found')

		return recipe
	}

	createRecipe(
		authorId: string,
		{
			recipeSteps,
			nutritionFact,
			ingredients,
			tags,
			...data
		}: RecipeCreateInput
	) {
		return this.prisma.recipe.create({
			data: {
				...data,
				author: {
					connect: { id: authorId }
				},
				...(!!nutritionFact && {
					nutritionFact: {
						create: nutritionFact
					}
				}),
				recipeSteps: {
					create: recipeSteps
				},
				...(!!ingredients?.length && {
					recipeIngredients: {
						create: ingredients.map(ingredient => ({
							ingredientId: ingredient.ingredientId,
							quantity: ingredient.quantity,
							unit: ingredient.unit
						}))
					}
				}),
				...(!!tags?.length && {
					tags: {
						connectOrCreate: tags.map(tag => ({
							where: { name: tag },
							create: { name: tag }
						}))
					}
				})
			}
		})
	}

	async updateRecipe(
		id: string,
		{
			recipeSteps,
			nutritionFact,
			ingredients,
			tags,
			...data
		}: RecipeUpdateInput
	) {
		await this.findById(id)

		return this.prisma.recipe.update({
			where: { id },
			data: {
				...data,
				...(nutritionFact && {
					nutritionFact: {
						upsert: {
							create: nutritionFact,
							update: nutritionFact
						}
					}
				}),
				...(recipeSteps && {
					recipeSteps: {
						deleteMany: {},
						create: recipeSteps.map(step => ({
							order: step.order,
							title: step.title,
							description: step.description
						}))
					}
				}),
				...(ingredients && {
					recipeIngredients: {
						deleteMany: {},
						create: ingredients.map((ingredient, index) => ({
							ingredientId: ingredient.ingredientId,
							quantity: ingredient.quantity,
							unit: ingredient.unit,
							order: index
						}))
					}
				}),
				...(tags && {
					tags: {
						set: [],
						connectOrCreate: tags.map(tagName => ({
							where: { name: tagName },
							create: { name: tagName }
						}))
					}
				})
			}
		})
	}

	async deleteRecipeById(id: string) {
		await this.findById(id)

		const deletedRecipe = await this.prisma.recipe.delete({
			where: { id }
		})

		if (!deletedRecipe) throw new BadRequestException('Recipe was not deleted')

		return true
	}
}
