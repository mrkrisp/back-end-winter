import { Field, ID, Int, ObjectType } from '@nestjs/graphql'

import { Difficulty } from '../recipe.enum'
import { NutritionFactModel } from './nutrition-fact.model'

import { UserModel } from 'src/users/models/user.model'
import { CommentModel } from '../reaction/models/comment.model'
import { RecipeIngredientModel } from './recipe-ingredient.model'
import { RecipeStepModel } from './recipe-step.model'
import { RecipeTagModel } from './recipe-tag.model'

@ObjectType()
export class RecipeModel {
	@Field(() => ID, { nullable: false })
	id!: string

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

	@Field(() => String, { nullable: false })
	authorId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => UserModel, { nullable: false })
	author!: UserModel

	@Field(() => [RecipeTagModel], { nullable: true })
	tags?: Array<RecipeTagModel>

	@Field(() => [RecipeIngredientModel], { nullable: true })
	recipeIngredients?: Array<RecipeIngredientModel>

	@Field(() => [RecipeStepModel], { nullable: true })
	recipeSteps?: Array<RecipeStepModel>

	@Field(() => NutritionFactModel, { nullable: true })
	nutritionFact?: NutritionFactModel | null

	@Field(() => Int, { nullable: false, defaultValue: 0 })
	likesCount!: number

	@Field(() => Boolean, { nullable: false, defaultValue: false })
	isLiked!: boolean

	@Field(() => [CommentModel], { nullable: true })
	comments?: Array<CommentModel>
}
