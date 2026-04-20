import {
	Cuisine,
	DietaryPreference,
	Difficulty,
	HealthGoal,
	MealType,
	SpecialOccasion,
	Unit
} from 'prisma/generated/enums'
import { ISeedRecipe } from './seed.types'

const stepImages = [
	'/images/recipes/test-step-1.jpg',
	'/images/recipes/test-step-2.jpg',
	'/images/recipes/test-step-3.jpg',
	'/images/recipes/test-step-4.jpg'
] as const

export const recommendedRecipes: ISeedRecipe[] = [
	{
		title: 'Smoothie Bowl',
		description:
			'Learn how to make the best smoothie bowl recipe with 5 ingredients in 5 minutes.',
		slug: 'smoothie-bowl',
		image: '/images/recipes/smoothie-bowl.jpg',
		calories: 220,
		cookingTime: 5,
		difficulty: Difficulty.EASY,
		mealType: MealType.BREAKFAST,
		dietaryPreference: DietaryPreference.VEGETARIAN,
		healthGoal: HealthGoal.WEIGHT_LOSS,
		cuisine: Cuisine.FRENCH,
		specialOccasion: SpecialOccasion.HOLIDAY,
		views: 156100,
		likesCount: 21800,
		tags: ['Breakfast', 'Quick', 'Healthy', 'Bowl'],
		nutritionFact: {
			proteins: '8',
			fats: '6',
			carbohydrates: '34',
			fiber: '7'
		},
		recipeIngredients: [
			{
				name: 'Banana',
				quantity: '1',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Spinach',
				quantity: '40',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Greek Yogurt',
				quantity: '120',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Granola',
				quantity: '30',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Coconut Flakes',
				quantity: '10',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Prepare the smoothie base',
				description:
					'Add banana, spinach, and Greek yogurt into a blender and blend until the texture becomes thick and creamy.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Adjust the consistency',
				description:
					'If needed, add a small splash of water or milk and blend again until the mixture is smooth but still thick enough for a bowl.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Transfer to the bowl',
				description:
					'Pour the smoothie mixture into a serving bowl and spread it evenly with a spoon.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Finish with toppings',
				description:
					'Top with granola, coconut flakes, and extra banana slices, then serve immediately.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Seared Scallops with White Beans and Spinach',
		description:
			'This recipe for seared scallops with white beans and spinach turns out a healthy dinner.',
		slug: 'seared-scallops-with-white-beans-and-spinach',
		image: '/images/recipes/seared-scallops-with-white-beans-and-spinach.jpg',
		calories: 420,
		cookingTime: 20,
		difficulty: Difficulty.HARD,
		mealType: MealType.DINNER,
		dietaryPreference: DietaryPreference.GLUTEN_FREE,
		healthGoal: HealthGoal.HEART_HEALTH,
		cuisine: Cuisine.FRENCH,
		specialOccasion: SpecialOccasion.ANNIVERSARY,
		views: 156100,
		likesCount: 7100,
		tags: ['Dinner', 'Seafood', 'Protein'],
		nutritionFact: {
			proteins: '31',
			fats: '14',
			carbohydrates: '28',
			fiber: '8'
		},
		recipeIngredients: [
			{
				name: 'Scallops',
				quantity: '200',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'White Beans',
				quantity: '150',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Spinach',
				quantity: '70',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Olive Oil',
				quantity: '10',
				unit: Unit.MILLILITER,
				defaultUnit: Unit.MILLILITER
			},
			{
				name: 'Garlic',
				quantity: '2',
				unit: Unit.CLOVES,
				defaultUnit: Unit.CLOVES
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Prep the scallops',
				description:
					'Pat the scallops dry, season lightly with salt and pepper, and set them aside while the pan heats up.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Sear until golden',
				description:
					'Cook the scallops in a hot pan with olive oil until both sides are deeply golden and just cooked through.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Warm the beans and spinach',
				description:
					'In the same pan, sauté garlic, then add white beans and spinach and cook until the spinach wilts.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Assemble the plate',
				description:
					'Spoon the bean and spinach mixture onto plates and top with the seared scallops before serving.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'The Only High-Protein Veggie Sandwich',
		description:
			'From beans to tofu to tempeh bacon, this high-protein veggie sandwich formula is filling and simple.',
		slug: 'the-only-high-protein-veggie-sandwich',
		image: '/images/recipes/the-only-high-protein-veggie-sandwich.jpg',
		calories: 250,
		cookingTime: 15,
		difficulty: Difficulty.EASY,
		mealType: MealType.LUNCH,
		dietaryPreference: DietaryPreference.VEGETARIAN,
		healthGoal: HealthGoal.MUSCLE_GAIN,
		cuisine: Cuisine.ITALIAN,
		specialOccasion: SpecialOccasion.PARTY,
		views: 156100,
		likesCount: 1100,
		tags: ['Lunch', 'Sandwich', 'Protein'],
		nutritionFact: {
			proteins: '19',
			fats: '9',
			carbohydrates: '24',
			fiber: '6'
		},
		recipeIngredients: [
			{
				name: 'Whole Grain Bread',
				quantity: '2',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{ name: 'Tofu', quantity: '80', unit: Unit.GRAM, defaultUnit: Unit.GRAM },
			{
				name: 'Avocado',
				quantity: '0.5',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Tomato',
				quantity: '0.5',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Lettuce',
				quantity: '20',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Toast the bread',
				description:
					'Toast the bread slices until lightly crisp so the sandwich holds the filling better.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Prepare the filling',
				description:
					'Slice tofu, avocado, and tomato, then wash and dry the lettuce leaves.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Layer the ingredients',
				description:
					'Add tofu, avocado, tomato, and lettuce in even layers over one slice of bread.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Close and serve',
				description:
					'Top with the second bread slice, press gently, and cut the sandwich before serving.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'High-Protein Black Bean Salad',
		description:
			'A satisfying high-protein black bean salad with fresh vegetables and bold flavor.',
		slug: 'high-protein-black-bean-salad',
		image: '/images/recipes/high-protein-black-bean-salad.jpg',
		calories: 280,
		cookingTime: 15,
		difficulty: Difficulty.MEDIUM,
		mealType: MealType.LUNCH,
		dietaryPreference: DietaryPreference.GLUTEN_FREE,
		healthGoal: HealthGoal.HEART_HEALTH,
		cuisine: Cuisine.MEXICAN,
		specialOccasion: SpecialOccasion.PARTY,
		views: 148000,
		likesCount: 12000,
		tags: ['Salad', 'Beans', 'Protein'],
		nutritionFact: {
			proteins: '15',
			fats: '8',
			carbohydrates: '30',
			fiber: '10'
		},
		recipeIngredients: [
			{
				name: 'Black Beans',
				quantity: '180',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{ name: 'Corn', quantity: '80', unit: Unit.GRAM, defaultUnit: Unit.GRAM },
			{
				name: 'Tomato',
				quantity: '1',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Red Onion',
				quantity: '0.5',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Olive Oil',
				quantity: '10',
				unit: Unit.MILLILITER,
				defaultUnit: Unit.MILLILITER
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Chop the vegetables',
				description:
					'Dice the tomato and red onion into small pieces so they distribute evenly through the salad.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Combine the base',
				description:
					'Add black beans, corn, tomato, and onion to a large bowl and mix until combined.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Season the salad',
				description:
					'Pour in olive oil, add your seasonings, and toss everything until coated.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Serve chilled or fresh',
				description:
					'Serve immediately or let the salad chill briefly so the flavors come together.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Greek Yogurt Berry Parfait',
		description:
			'Layers of Greek yogurt, berries, and granola for a quick protein-rich breakfast.',
		slug: 'greek-yogurt-berry-parfait',
		image: '/images/recipes/greek-yogurt-berry-parfait.jpg',
		calories: 310,
		cookingTime: 10,
		difficulty: Difficulty.EASY,
		mealType: MealType.BREAKFAST,
		dietaryPreference: DietaryPreference.VEGETARIAN,
		healthGoal: HealthGoal.MUSCLE_GAIN,
		cuisine: Cuisine.FRENCH,
		specialOccasion: SpecialOccasion.HOLIDAY,
		views: 98000,
		likesCount: 6400,
		tags: ['Breakfast', 'Parfait', 'Protein'],
		nutritionFact: {
			proteins: '17',
			fats: '7',
			carbohydrates: '33',
			fiber: '5'
		},
		recipeIngredients: [
			{
				name: 'Greek Yogurt',
				quantity: '180',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Blueberries',
				quantity: '60',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Strawberries',
				quantity: '60',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Granola',
				quantity: '35',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Prepare the berries',
				description:
					'Wash the berries well and slice the strawberries into smaller bite-size pieces.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Start the first layer',
				description:
					'Add a layer of Greek yogurt to the bottom of a glass, bowl, or jar.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Add fruit and crunch',
				description:
					'Spoon in the berries and add a layer of granola for texture.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Repeat and finish',
				description:
					'Repeat the layers once more and finish with extra berries on top.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Chickpea Avocado Toast',
		description:
			'Mashed chickpeas and avocado on toasted bread with lemon and herbs.',
		slug: 'chickpea-avocado-toast',
		image: '/images/recipes/chickpea-avocado-toast.jpg',
		calories: 340,
		cookingTime: 12,
		difficulty: Difficulty.EASY,
		mealType: MealType.SNACK,
		dietaryPreference: DietaryPreference.DAIRY_FREE,
		healthGoal: HealthGoal.HEART_HEALTH,
		cuisine: Cuisine.ITALIAN,
		specialOccasion: SpecialOccasion.PARTY,
		views: 85000,
		likesCount: 5300,
		tags: ['Toast', 'Snack', 'Avocado'],
		nutritionFact: {
			proteins: '11',
			fats: '15',
			carbohydrates: '30',
			fiber: '9'
		},
		recipeIngredients: [
			{
				name: 'Bread',
				quantity: '2',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Chickpeas',
				quantity: '100',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Avocado',
				quantity: '0.5',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Lemon Juice',
				quantity: '1',
				unit: Unit.TABLESPOON,
				defaultUnit: Unit.TABLESPOON
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Toast the slices',
				description:
					'Toast the bread until golden and crisp enough to hold the topping.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Mash the mixture',
				description:
					'Mash chickpeas and avocado together with lemon juice until chunky but spreadable.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Spread on toast',
				description:
					'Spread the chickpea avocado mixture generously over the toast.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Finish and serve',
				description:
					'Top with herbs or seasoning and serve immediately while the toast is still crisp.',
				image: stepImages[3]
			}
		]
	}
]

export const popularRecipes: ISeedRecipe[] = [
	{
		title: 'Mushroom Quiche',
		description:
			'This crustless salmon, spinach and mushroom quiche is easy to make and great for brunch.',
		slug: 'mushroom-quiche',
		image: '/images/recipes/mushroom-quiche.jpg',
		calories: 220,
		cookingTime: 35,
		difficulty: Difficulty.MEDIUM,
		mealType: MealType.LUNCH,
		dietaryPreference: DietaryPreference.GLUTEN_FREE,
		healthGoal: HealthGoal.HEART_HEALTH,
		cuisine: Cuisine.FRENCH,
		specialOccasion: SpecialOccasion.HOLIDAY,
		views: 221000,
		likesCount: 21800,
		tags: ['Quiche', 'Brunch', 'Mushroom'],
		nutritionFact: {
			proteins: '16',
			fats: '11',
			carbohydrates: '12',
			fiber: '4'
		},
		recipeIngredients: [
			{
				name: 'Eggs',
				quantity: '4',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Mushrooms',
				quantity: '120',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Spinach',
				quantity: '60',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Salmon',
				quantity: '80',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Cook the vegetables',
				description:
					'Sauté mushrooms and spinach until softened and any extra moisture has evaporated.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Prepare the egg base',
				description:
					'Whisk the eggs and combine them with the cooked vegetables and salmon pieces.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Transfer to baking dish',
				description:
					'Pour the mixture into a prepared baking dish and spread it evenly.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Bake until set',
				description:
					'Bake until the center is set and the top is lightly golden before slicing.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Spinach Breakfast Taco',
		description:
			'A healthy breakfast taco with spinach and egg that comes together fast.',
		slug: 'spinach-breakfast-taco',
		image: '/images/recipes/spinach-breakfast-taco.jpg',
		calories: 189,
		cookingTime: 15,
		difficulty: Difficulty.EASY,
		mealType: MealType.BREAKFAST,
		dietaryPreference: DietaryPreference.VEGETARIAN,
		healthGoal: HealthGoal.WEIGHT_LOSS,
		cuisine: Cuisine.MEXICAN,
		specialOccasion: SpecialOccasion.PARTY,
		views: 198000,
		likesCount: 9800,
		tags: ['Taco', 'Breakfast', 'Egg'],
		nutritionFact: {
			proteins: '12',
			fats: '7',
			carbohydrates: '18',
			fiber: '4'
		},
		recipeIngredients: [
			{
				name: 'Tortilla',
				quantity: '1',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{ name: 'Egg', quantity: '2', unit: Unit.PIECE, defaultUnit: Unit.PIECE },
			{
				name: 'Spinach',
				quantity: '30',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Cook the eggs',
				description:
					'Scramble the eggs gently with spinach until everything is soft and evenly cooked.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Warm the tortilla',
				description:
					'Heat the tortilla in a dry pan so it becomes flexible and warm.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Fill the taco',
				description:
					'Spoon the egg and spinach mixture into the center of the tortilla.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Serve right away',
				description:
					'Fold the taco and serve immediately while everything is warm.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Strawberry Spinach Salad',
		description:
			'A fresh strawberry spinach salad with greens, berries, and a light dressing.',
		slug: 'strawberry-spinach-salad',
		image: '/images/recipes/strawberry-spinach-salad.jpg',
		calories: 354,
		cookingTime: 15,
		difficulty: Difficulty.EASY,
		mealType: MealType.LUNCH,
		dietaryPreference: DietaryPreference.GLUTEN_FREE,
		healthGoal: HealthGoal.HEART_HEALTH,
		cuisine: Cuisine.FRENCH,
		specialOccasion: SpecialOccasion.PARTY,
		views: 187000,
		likesCount: 8700,
		tags: ['Salad', 'Strawberry', 'Fresh'],
		nutritionFact: {
			proteins: '9',
			fats: '18',
			carbohydrates: '29',
			fiber: '6'
		},
		recipeIngredients: [
			{
				name: 'Spinach',
				quantity: '70',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Strawberries',
				quantity: '100',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Walnuts',
				quantity: '20',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Olive Oil',
				quantity: '10',
				unit: Unit.MILLILITER,
				defaultUnit: Unit.MILLILITER
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Wash and prep',
				description:
					'Wash the spinach thoroughly and slice the strawberries into even pieces.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Build the salad',
				description:
					'Add spinach, strawberries, and walnuts into a large salad bowl.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Add dressing',
				description:
					'Drizzle with olive oil or your dressing of choice and toss lightly.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Plate and serve',
				description:
					'Transfer to serving plates and serve immediately for the freshest texture.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Cottage Cheese Toast',
		description:
			'Whole-grain toast topped with creamy cottage cheese, avocado, and egg.',
		slug: 'cottage-cheese-toast',
		image: '/images/recipes/cottage-cheese-toast.jpg',
		calories: 456,
		cookingTime: 10,
		difficulty: Difficulty.EASY,
		mealType: MealType.BREAKFAST,
		dietaryPreference: DietaryPreference.VEGETARIAN,
		healthGoal: HealthGoal.MUSCLE_GAIN,
		cuisine: Cuisine.ITALIAN,
		specialOccasion: SpecialOccasion.PARTY,
		views: 176000,
		likesCount: 11200,
		tags: ['Toast', 'Protein', 'Breakfast'],
		nutritionFact: {
			proteins: '21',
			fats: '22',
			carbohydrates: '34',
			fiber: '7'
		},
		recipeIngredients: [
			{
				name: 'Bread',
				quantity: '2',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Cottage Cheese',
				quantity: '100',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Avocado',
				quantity: '0.5',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{ name: 'Egg', quantity: '1', unit: Unit.PIECE, defaultUnit: Unit.PIECE }
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Toast the bread',
				description:
					'Toast the bread slices until crisp and lightly golden around the edges.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Prepare toppings',
				description:
					'Slice the avocado and cook or peel the egg depending on the style you want.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Assemble the toast',
				description:
					'Spread cottage cheese over the toast and layer avocado and egg on top.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Season and serve',
				description:
					'Add seasoning or herbs and serve immediately while the toast is still warm.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Salmon & Sweet Potato Grain Bowl',
		description:
			'A hearty grain bowl with salmon, sweet potato, and vegetables for a balanced meal.',
		slug: 'salmon-and-sweet-potato-grain-bowl',
		image: '/images/recipes/salmon-and-sweet-potato-grain-bowl.jpg',
		calories: 487,
		cookingTime: 30,
		difficulty: Difficulty.MEDIUM,
		mealType: MealType.DINNER,
		dietaryPreference: DietaryPreference.GLUTEN_FREE,
		healthGoal: HealthGoal.MUSCLE_GAIN,
		cuisine: Cuisine.FRENCH,
		specialOccasion: SpecialOccasion.HOLIDAY,
		views: 171000,
		likesCount: 9400,
		tags: ['Bowl', 'Salmon', 'Dinner'],
		nutritionFact: {
			proteins: '32',
			fats: '17',
			carbohydrates: '39',
			fiber: '8'
		},
		recipeIngredients: [
			{
				name: 'Salmon',
				quantity: '160',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Sweet Potato',
				quantity: '150',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Brown Rice',
				quantity: '120',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Broccoli',
				quantity: '70',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Roast the sweet potato',
				description:
					'Roast the sweet potato cubes until they become tender inside and lightly browned outside.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Cook the salmon',
				description:
					'Pan-sear or bake the salmon until it flakes easily with a fork.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Prepare the bowl base',
				description:
					'Add brown rice and broccoli into the serving bowl as the base layer.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Finish the bowl',
				description:
					'Top with roasted sweet potato and salmon, then serve warm.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Turkey Hummus Wrap',
		description:
			'A quick wrap with turkey, hummus, greens, and crunchy vegetables.',
		slug: 'turkey-hummus-wrap',
		image: '/images/recipes/turkey-hummus-wrap.jpg',
		calories: 390,
		cookingTime: 12,
		difficulty: Difficulty.EASY,
		mealType: MealType.LUNCH,
		dietaryPreference: DietaryPreference.LOW_CARB,
		healthGoal: HealthGoal.MUSCLE_GAIN,
		cuisine: Cuisine.ITALIAN,
		specialOccasion: SpecialOccasion.PARTY,
		views: 165000,
		likesCount: 7600,
		tags: ['Wrap', 'Turkey', 'Lunch'],
		nutritionFact: {
			proteins: '24',
			fats: '12',
			carbohydrates: '26',
			fiber: '5'
		},
		recipeIngredients: [
			{
				name: 'Tortilla',
				quantity: '1',
				unit: Unit.PIECE,
				defaultUnit: Unit.PIECE
			},
			{
				name: 'Turkey',
				quantity: '90',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{
				name: 'Hummus',
				quantity: '2',
				unit: Unit.TABLESPOON,
				defaultUnit: Unit.TABLESPOON
			},
			{
				name: 'Lettuce',
				quantity: '20',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Prepare the tortilla',
				description:
					'Lay the tortilla flat and warm it slightly if needed so it rolls more easily.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Spread the hummus',
				description:
					'Spread the hummus evenly across the center of the tortilla.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Add turkey and greens',
				description:
					'Layer turkey and lettuce over the hummus in a neat, even line.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Roll and slice',
				description:
					'Roll the wrap tightly, slice it in half, and serve immediately.',
				image: stepImages[3]
			}
		]
	},
	{
		title: 'Egg Fried Cauliflower Rice',
		description:
			'Light cauliflower rice stir-fried with egg, peas, and green onion.',
		slug: 'egg-fried-cauliflower-rice',
		image: '/images/recipes/egg-fried-cauliflower-rice.jpg',
		calories: 295,
		cookingTime: 18,
		difficulty: Difficulty.EASY,
		mealType: MealType.DINNER,
		dietaryPreference: DietaryPreference.LOW_CARB,
		healthGoal: HealthGoal.WEIGHT_LOSS,
		cuisine: Cuisine.CHINESE,
		specialOccasion: SpecialOccasion.PARTY,
		views: 162000,
		likesCount: 6900,
		tags: ['Rice', 'Low-Carb', 'Dinner'],
		nutritionFact: {
			proteins: '14',
			fats: '10',
			carbohydrates: '16',
			fiber: '5'
		},
		recipeIngredients: [
			{
				name: 'Cauliflower Rice',
				quantity: '180',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			},
			{ name: 'Egg', quantity: '2', unit: Unit.PIECE, defaultUnit: Unit.PIECE },
			{ name: 'Peas', quantity: '40', unit: Unit.GRAM, defaultUnit: Unit.GRAM },
			{
				name: 'Green Onion',
				quantity: '15',
				unit: Unit.GRAM,
				defaultUnit: Unit.GRAM
			}
		],
		recipeSteps: [
			{
				order: 1,
				title: 'Cook the egg',
				description:
					'Scramble the egg in a hot pan until just set, then move it aside.',
				image: stepImages[0]
			},
			{
				order: 2,
				title: 'Stir-fry the rice',
				description:
					'Cook the cauliflower rice with peas and green onion until heated through.',
				image: stepImages[1]
			},
			{
				order: 3,
				title: 'Combine everything',
				description:
					'Return the cooked egg to the pan and mix until evenly distributed.',
				image: stepImages[2]
			},
			{
				order: 4,
				title: 'Serve warm',
				description:
					'Plate the cauliflower rice and serve immediately while hot.',
				image: stepImages[3]
			}
		]
	}
]
