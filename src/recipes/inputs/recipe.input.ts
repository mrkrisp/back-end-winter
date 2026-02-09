import { Field, ID, registerEnumType } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { NutritionFactUpdateInput } from './nutrition-fact.input'
import { RecipeStepInput } from './recipe-step.input'

export enum Difficulty {
	EASY = 'EASY',
	MEDIUM = 'MEDIUM',
	HARD = 'HARD'
}

registerEnumType(Difficulty, { name: 'Difficulty', description: undefined })


@InputType()
export class RecipeCreateInput {
	@Field(() => String, { nullable: false })
	slug!: string

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => Int, { nullable: false })
	calories!: number

	@Field(() => Int, { nullable: false })
	cookingTime!: number

	@Field(() => Difficulty, { nullable: false })
	difficulty!: `${Difficulty}`

	@Field(() => String, { nullable: true })
	tags?: string[]

	@Field(() => [ID], {
		nullable: true
	})
	ingredientIds?: string[]

	@Field(() => [RecipeStepInput], { nullable: true })
	recipeSteps?: RecipeStepInput[]

	@Field(() => NutritionFactUpdateInput, {
		nullable: true
	})
	nutritionFact?: NutritionFactUpdateInput
}
