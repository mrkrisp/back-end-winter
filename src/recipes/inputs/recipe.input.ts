import { Field, InputType, Int } from '@nestjs/graphql'
import {
	Cuisine,
	DietaryPreference,
	Difficulty,
	HealthGoal,
	MealType,
	SpecialOccasion
} from '../recipe.enum'
import { NutritionFactUpdateInput } from './nutrition-fact.input'
import { RecipeIngredientInput } from './recipe-ingredient.input'
import { RecipeStepInput } from './recipe-step.input'

@InputType()
export class RecipeCreateInput {
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

	@Field(() => [String], { nullable: true })
	tags?: string[]

	@Field(() => [RecipeIngredientInput], {
		nullable: true
	})
	ingredients?: RecipeIngredientInput[]

	@Field(() => [RecipeStepInput], { nullable: true })
	recipeSteps?: RecipeStepInput[]

	@Field(() => NutritionFactUpdateInput, {
		nullable: true
	})
	nutritionFact?: NutritionFactUpdateInput
}

@InputType()
export class RecipeUpdateInput {
	@Field(() => String, { nullable: true })
	slug?: string

	@Field(() => String, { nullable: true })
	title?: string

	@Field(() => String, { nullable: true })
	description?: string

	@Field(() => String, { nullable: false })
	image?: string

	@Field(() => Int, { nullable: true })
	calories?: number

	@Field(() => Int, { nullable: true })
	cookingTime?: number

	@Field(() => Difficulty, { nullable: true })
	difficulty?: `${Difficulty}`

	@Field(() => MealType, { nullable: true })
	mealType?: `${MealType}`

	@Field(() => DietaryPreference, { nullable: true })
	dietaryPreference?: `${DietaryPreference}`

	@Field(() => HealthGoal, { nullable: true })
	healthGoal?: `${HealthGoal}`

	@Field(() => Cuisine, { nullable: true })
	cuisine?: `${Cuisine}`

	@Field(() => SpecialOccasion, { nullable: true })
	specialOccasion?: `${SpecialOccasion}`

	@Field(() => [String], { nullable: true })
	tags?: string[]

	@Field(() => [RecipeIngredientInput], {
		nullable: true
	})
	ingredients?: RecipeIngredientInput[]

	@Field(() => [RecipeStepInput], { nullable: true })
	recipeSteps?: RecipeStepInput[]

	@Field(() => NutritionFactUpdateInput, {
		nullable: true
	})
	nutritionFact?: NutritionFactUpdateInput
}
