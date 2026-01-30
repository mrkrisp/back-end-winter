import { Query, Resolver } from '@nestjs/graphql'
import { Role } from 'prisma/generated/prisma/enums'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { UserProfileModel } from './models/user-profile.model'
import { UsersService } from './users.service'

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Auth()
  @Query(() => UserProfileModel, { name: 'profile' })
  getProfile(@CurrentUser('id') id: string) {
    return this.usersService.findById(id)
  }

  @Auth(Role.ADMIN)
  @Query(() => [UserProfileModel], { name: 'users' })
  async getAllUsers() {
    return this.usersService.findAll()
  }
}
