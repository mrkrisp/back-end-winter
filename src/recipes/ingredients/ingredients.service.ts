import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { IngredientCreateInput } from './inputs/ingredient-create.input'

@Injectable()
export class IngredientsService {
	constructor(private prisma: PrismaService) {}

	getAll() {
		return this.prisma.ingredient.findMany()
	}

	async findById(id: string) {
		const ingredient = await this.prisma.ingredient.findUnique({
			where: { id }
		})

		if (!ingredient) throw new NotFoundException('Ingredient not found')

		return ingredient
	}

	// async create(data: IngredientCreateInput) {
	// 	const { name } = data
	//
	// 	const existingIngredient = await this.prisma.ingredient.findFirst({
	// 		where: { name }
	// 	})
	//
	// 	if (existingIngredient)
	// 		throw new BadRequestException('Ingredient already exists')
	//
	// 	return this.prisma.ingredient.create({
	// 		data
	// 	})
	// }

	async deleteById(id: string) {
		await this.findById(id)

		return this.prisma.ingredient.delete({
			where: { id }
		})
	}

	async update(id: string, data: IngredientCreateInput) {
		await this.findById(id)

		return this.prisma.ingredient.update({
			where: { id },
			data
		})
	}
}
