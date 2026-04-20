import { registerEnumType } from '@nestjs/graphql'

export enum Difficulty {
	EASY = 'EASY',
	MEDIUM = 'MEDIUM',
	HARD = 'HARD'
}

registerEnumType(Difficulty, { name: 'Difficulty', description: undefined })

export enum MealType {
	BREAKFAST = 'BREAKFAST',
	LUNCH = 'LUNCH',
	DINNER = 'DINNER',
	SNACK = 'SNACK',
	DESSERT = 'DESSERT',
	DRINKS = 'DRINKS'
}

registerEnumType(MealType, { name: 'MealType', description: undefined })

export enum DietaryPreference {
	VEGETARIAN = 'VEGETARIAN',
	LOW_CARB = 'LOW_CARB',
	GLUTEN_FREE = 'GLUTEN_FREE',
	KETO = 'KETO',
	DAIRY_FREE = 'DAIRY_FREE'
}

registerEnumType(DietaryPreference, {
	name: 'DietaryPreference',
	description: undefined
})

export enum HealthGoal {
	WEIGHT_LOSS = 'WEIGHT_LOSS',
	MUSCLE_GAIN = 'MUSCLE_GAIN',
	HEART_HEALTH = 'HEART_HEALTH'
}

registerEnumType(HealthGoal, { name: 'HealthGoal', description: undefined })

export enum Cuisine {
	RUSSIAN = 'RUSSIAN',
	ITALIAN = 'ITALIAN',
	CHINESE = 'CHINESE',
	MEXICAN = 'MEXICAN',
	INDIAN = 'INDIAN',
	FRENCH = 'FRENCH'
}

registerEnumType(Cuisine, { name: 'Cuisine', description: undefined })

export enum SpecialOccasion {
	HOLIDAY = 'HOLIDAY',
	BIRTHDAY = 'BIRTHDAY',
	ANNIVERSARY = 'ANNIVERSARY',
	PARTY = 'PARTY'
}

registerEnumType(SpecialOccasion, {
	name: 'SpecialOccasion',
	description: undefined
})

export enum Unit {
	MILLILITER = 'MILLILITER',
	GRAM = 'GRAM',
	PIECE = 'PIECE',
	TABLESPOON = 'TABLESPOON',
	TEASPOON = 'TEASPOON',
	CLOVES = 'CLOVES'
}

registerEnumType(Unit, { name: 'Unit', description: undefined })
