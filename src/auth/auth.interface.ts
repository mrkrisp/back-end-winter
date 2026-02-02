import { Field, ObjectType } from '@nestjs/graphql'
import { User } from 'prisma/generated/graphql/user'

export type TCurrentUser = Omit<User, 'password'>

export type IRequestWithUser = {
  user?: TCurrentUser
}

export type TAuthTokenData = Pick<User, 'id' | 'role'>

@ObjectType()
export class AuthResponse {
  @Field(() => User)
  user: User

  @Field()
  accessToken: string
}
