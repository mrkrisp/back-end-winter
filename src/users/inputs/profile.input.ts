import { Field, InputType, Int } from '@nestjs/graphql'
import { Gender } from 'prisma/generated/enums'

@InputType()
export class ProfileUpdateInput {
	@Field(() => String, { nullable: true })
	fullName?: string

	@Field(() => Gender, { nullable: true })
	gender?: Gender | null

	@Field(() => Int, { nullable: true })
	age?: number | null

	@Field(() => String, { nullable: true })
	bio?: string | null
}
