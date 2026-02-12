import { Field, Float, ID, ObjectType } from '@nestjs/graphql'
import { Unit } from 'src/recipes/recipe.enum'

@ObjectType()
export class IngredientModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => String, { nullable: false })
	iconUrl!: string

	@Field(() => Float, { nullable: false })
	price!: number

	@Field(() => Unit, { nullable: false })
	defaultUnit!: `${Unit}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
