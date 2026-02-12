import { registerEnumType } from '@nestjs/graphql'
import { Role } from 'prisma/generated/enums'

registerEnumType(Role, {
	name: 'Role'
})
