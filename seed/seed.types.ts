import {
	Cuisine,
	DietaryPreference,
	Difficulty,
	HealthGoal,
	MealType,
	SpecialOccasion,
	Unit
} from 'prisma/generated/enums'

export interface ISeedRecipe {
	title: string
	description: string
	slug: string
	image: string
	calories: number
	cookingTime: number
	difficulty: Difficulty
	mealType: MealType
	dietaryPreference: DietaryPreference
	healthGoal: HealthGoal
	cuisine: Cuisine
	specialOccasion: SpecialOccasion
	views: number
	likesCount: number
	tags: string[]
	nutritionFact: {
		proteins: string
		fats: string
		carbohydrates: string
		fiber: string
	}
	recipeIngredients: {
		name: string
		quantity: string
		unit: Unit
		defaultUnit: Unit
	}[]
	recipeSteps: {
		order: number
		title: string
		description: string
		image: string
	}[]
}
