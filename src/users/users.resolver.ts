import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import type { UserUpdateInput } from 'prisma/generated/models/user/user-update.input'
import { User } from 'prisma/generated/models/user/user.model'
import { Role } from 'prisma/generated/prisma/enums'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UsersService } from './users.service'

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Auth()
  @Query(() => User, { name: 'profile' })
  getProfile(@CurrentUser('id') id: string) {
    return this.usersService.findById(id)
  }

  @Auth()
  @Mutation(() => User, { name: 'updateProfile' })
  async updateProfile(
    @CurrentUser('id') id: string,
    @Args('data') input: UserUpdateInput
  ) {
    return this.usersService.updateProfile(id, input)
  }

  @Auth(Role.ADMIN)
  @Query(() => [User], { name: 'users' })
  async getAllUsers() {
    return this.usersService.findAll()
  }
}
