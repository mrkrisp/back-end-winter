import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma } from 'prisma/generated/client'
import { PrismaService } from '../prisma/prisma.service'
import { RecipesQueryInput } from './inputs/get-recipes-query.input'

@Injectable()
export class RecipesService {
	constructor(private prisma: PrismaService) {}

	async getAll(
		{ page, limit, searchTerm, sort }: RecipesQueryInput,
		userId?: string
	) {
		const skip = (page - 1) * limit

		const recipes = await this.prisma.recipe.findMany({
			skip,
			take: limit,

			where: {
				...(searchTerm && {
					OR: [
						{ title: { contains: searchTerm, mode: 'insensitive' } },
						{ description: { contains: searchTerm, mode: 'insensitive' } },
						{
							recipeIngredients: {
								some: {
									ingredient: {
										name: { contains: searchTerm, mode: 'insensitive' }
									}
								}
							}
						}
					]
				})
			},
			orderBy: this.getOrderBy(sort),
			include: {
				_count: {
					select: { likes: true }
				},
				...(userId && {
					likes: {
						where: { userId },
						select: { id: true }
					}
				}),
				tags: true,
				nutritionFact: true,
				recipeIngredients: {
					include: {
						ingredient: true
					}
				},
				recipeSteps: true,
				comments: true
			}
		})

		return recipes.map(recipe => {
			return {
				...recipe,
				likesCount: recipe._count.likes,
				isLiked: userId ? recipe.likes.length > 0 : false,
				likes: undefined
			}
		})
	}

	private getOrderBy(sort?: string) {
		switch (sort) {
			case 'recommended':
				return { likes: { _count: Prisma.SortOrder.desc } }
			case 'popular':
				return { views: Prisma.SortOrder.desc }
			default:
				return { createdAt: Prisma.SortOrder.desc }
		}
	}

	async findBySlug(slug: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: { slug },
			include: {
				recipeIngredients: {
					include: {
						ingredient: true
					}
				},
				recipeSteps: true,
				comments: true
			}
		})

		if (!recipe)
			throw new NotFoundException(`Recipe with ${slug} slug was not found`)

		return recipe
	}
}
