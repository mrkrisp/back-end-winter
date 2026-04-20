import { Field, InputType, Int } from '@nestjs/graphql'
import {
	Cuisine,
	DietaryPreference,
	HealthGoal,
	MealType,
	SpecialOccasion
} from '../recipe.enum'

@InputType()
export class RecipesQueryInput {
	@Field(() => Int, { defaultValue: 1 })
	page: number

	@Field(() => Int, { defaultValue: 10 })
	limit: number

	@Field(() => String, { nullable: true })
	searchTerm?: string

	@Field(() => String, { nullable: true })
	sort?: 'new' | 'recommended' | 'popular'

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
}
