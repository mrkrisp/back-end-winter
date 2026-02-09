import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RecipeCreateInput } from './inputs/recipe.input'

@Injectable()
export class AdminRecipesService {
	constructor(private prisma: PrismaService) {}

	async findById(id: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { id }
		})

		if (!recipe) throw new NotFoundException('Recipe was not found')

		return recipe
	}

	async create(authorId: string,{recipeSteps, nutritionFact, ingredientIds, tags, ...data}: RecipeCreateInput) {
		return this.prisma.recipe.create({
			data: {
				...data,
				author: {
					connect: { id: authorId }
				},
				...(!!nutritionFact && {nutritionFact: {
					create: nutritionFact
				}}),
				recipeSteps: {
					create: recipeSteps
				},
				...(!!ingredientIds?.length && {
					recipeIngredients: {
						create: ingredientIds.map((ingredientId, index) => ({
							ingredientId,
							quantity: 1,
							order: index
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

	async deleteById(id: string) {
		await this.findById(id)

		return this.prisma.recipe.delete({
			where: { id }
		})
	}

	async update(id: string, data: RecipeCreateInput) {
		await this.findById(id)

		return this.prisma.recipe.update({
			where: { id },
			data
		})
	}
}
