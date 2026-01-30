import { Field, ObjectType } from '@nestjs/graphql'
import { Role } from 'prisma/generated/prisma/enums'
import { UserProfileModel } from 'src/users/models/user-profile.model'

export type ICurrentUser = Omit<UserProfileModel, 'password'>

export type IRequestWithUser = {
  user?: ICurrentUser
}

export interface IAuthTokenData {
  id: string
  role: Role
}

@ObjectType()
export class AuthResponse {
  @Field(() => UserProfileModel)
  user: UserProfileModel

  @Field()
  accessToken: string
}
