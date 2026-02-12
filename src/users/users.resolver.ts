import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Role } from 'prisma/generated/enums'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UserUpdateInput } from './inputs/user-update.input'
import { UserModel } from './models/user.model'
import { UsersService } from './users.service'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Auth()
	@Query(() => UserModel, { name: 'profile' })
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Auth()
	@Mutation(() => UserModel)
	async updateProfile(
		@CurrentUser('id') id: string,
		@Args('data') input: UserUpdateInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	@Auth(Role.ADMIN)
	@Query(() => [UserModel], { name: 'users' })
	async getAllUsers() {
		return this.usersService.findAll()
	}
}
