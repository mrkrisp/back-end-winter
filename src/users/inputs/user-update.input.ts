import { Field, InputType } from '@nestjs/graphql'
import { BodyMeasurementUpdateInput } from './body-measurement.input'
import { ProfileUpdateInput } from './profile.input'

@InputType()
export class UserUpdateInput {
	@Field(() => String, { nullable: true })
	email?: string

	@Field(() => String, { nullable: true })
	password?: string

	@Field(() => ProfileUpdateInput, { nullable: true })
	profile?: ProfileUpdateInput

	@Field(() => BodyMeasurementUpdateInput, {
		nullable: true
	})
	measurements?: BodyMeasurementUpdateInput
}
