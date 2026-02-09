import {
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AdminRecipesService } from './recipes-admin.service'

@Injectable()
export class RecipesService {
	constructor(
		private prisma: PrismaService,
		private adminRecipesService: AdminRecipesService
	) {}

	getAll() {
		return this.prisma.recipe.findMany()
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
				recipeSteps: true
			}
		})

		if (!recipe)
			throw new NotFoundException(`Recipe with ${slug} slug was not found`)

		return recipe
	}
}
