import { Field, ID, Int, ObjectType } from '@nestjs/graphql'

import { UserModel } from 'src/users/models/user.model'
import {
	Cuisine,
	DietaryPreference,
	Difficulty,
	HealthGoal,
	MealType,
	SpecialOccasion
} from '../recipe.enum'
import { NutritionFactModel } from './nutrition-fact.model'
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

	@Field(() => String, { nullable: false })
	image!: string

	@Field(() => Int, { nullable: false })
	calories!: number

	@Field(() => Int, { nullable: false })
	cookingTime!: number

	@Field(() => Difficulty, { nullable: false })
	difficulty!: `${Difficulty}`

	@Field(() => MealType, { nullable: false })
	mealType!: `${MealType}`

	@Field(() => DietaryPreference, { nullable: false })
	dietaryPreference!: `${DietaryPreference}`

	@Field(() => HealthGoal, { nullable: false })
	healthGoal!: `${HealthGoal}`

	@Field(() => Cuisine, { nullable: false })
	cuisine!: `${Cuisine}`

	@Field(() => SpecialOccasion, { nullable: false })
	specialOccasion!: `${SpecialOccasion}`

	@Field(() => Int, { nullable: false })
	views!: number

	@Field(() => String, { nullable: false })
	authorId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => UserModel, { nullable: false })
	author?: UserModel

	@Field(() => NutritionFactModel, { nullable: true })
	nutritionFact?: NutritionFactModel | null

	@Field(() => [RecipeTagModel], { nullable: true })
	tags?: Array<RecipeTagModel>

	@Field(() => [RecipeStepModel], { nullable: true })
	recipeSteps?: Array<RecipeStepModel>

	@Field(() => [RecipeIngredientModel], { nullable: true })
	recipeIngredients?: Array<RecipeIngredientModel>

	@Field(() => Int, { nullable: true })
	likes?: number

	// @Field(() => [Comment], { nullable: true })
	// comments?: Array<Comment>
}
