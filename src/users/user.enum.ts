import { registerEnumType } from '@nestjs/graphql'
import { ActivityLevel, Gender, NutritionGoal } from 'prisma/generated/enums'

registerEnumType(Gender, {
	name: 'Gender'
})

registerEnumType(ActivityLevel, {
	name: 'ActivityLevel'
})

registerEnumType(NutritionGoal, {
	name: 'NutritionGoal'
})
