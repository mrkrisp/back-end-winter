import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from 'prisma/generated/prisma/enums';

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class UserModel {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field(() => Role)
  role: Role;
}

export interface IAuthTokenData {
  id: string;
  role: Role;
}

@ObjectType()
export class AuthResponse {
  @Field(() => UserModel)
  user: UserModel;

  @Field()
  accessToken: string;
}
