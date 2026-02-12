import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Role } from 'prisma/generated/enums'
import { BodyMeasurementModel } from './body-measurement.model'
import { ProfileModel } from './profile.model'

@ObjectType()
export class UserModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	email!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: false })
	role!: `${Role}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => ProfileModel, { nullable: true })
	profile?: ProfileModel | null

	@Field(() => BodyMeasurementModel, { nullable: true })
	measurements?: BodyMeasurementModel | null
}
