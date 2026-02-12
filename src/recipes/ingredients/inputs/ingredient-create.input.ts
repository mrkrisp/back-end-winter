import { Field, Float, InputType } from '@nestjs/graphql'

@InputType()
export class IngredientCreateInput {
	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => String, { nullable: false })
	iconUrl!: string

	@Field(() => Float, { nullable: false })
	price!: number

	@Field(() => String)
	description!: string
}
