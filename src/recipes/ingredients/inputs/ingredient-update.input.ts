import { Field, Float, InputType } from '@nestjs/graphql'

@InputType()
export class IngredientUpdateInput {
	@Field(() => String, { nullable: true })
	name?: string

	@Field(() => String, { nullable: true })
	iconUrl?: string

	@Field(() => Float, { nullable: true })
	price?: number

	@Field(() => String, { nullable: true })
	description?: string
}
