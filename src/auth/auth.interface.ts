import { Field, ObjectType } from '@nestjs/graphql'
import { UserModel } from 'src/users/models/user.model'

export type TCurrentUser = Omit<UserModel, 'password'>

export type IRequestWithUser = {
	user?: TCurrentUser
}

export type TAuthTokenData = Pick<UserModel, 'id' | 'role'>

@ObjectType()
export class AuthResponse {
	@Field(() => UserModel)
	user: UserModel
}
