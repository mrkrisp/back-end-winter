import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RecipeTagModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date
}
