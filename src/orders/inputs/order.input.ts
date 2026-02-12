import { Field, Float, ID, InputType } from '@nestjs/graphql'
import { OrderStatus } from '../enums'

@InputType()
export class OrderItemInput {
	@Field(() => ID)
	recipeIngredientId!: string

	@Field(() => Float, { defaultValue: 1 })
	quantity!: number
}

@InputType()
export class OrderCreateInput {
	@Field(() => [OrderItemInput])
	items!: OrderItemInput[]
}

@InputType()
export class OrderUpdateStatusInput {
	@Field(() => OrderStatus)
	status!: OrderStatus
}
