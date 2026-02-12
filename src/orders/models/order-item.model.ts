import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { RecipeIngredientModel } from 'src/recipes/models/recipe-ingredient.model'

@ObjectType()
export class OrderItemModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => Int, { defaultValue: 1, nullable: true })
	quantity!: number | null

	@Field(() => String, { nullable: false })
	price!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => RecipeIngredientModel, { nullable: false })
	recipeIngredient?: RecipeIngredientModel
}
