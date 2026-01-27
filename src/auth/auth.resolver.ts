import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthInput } from './auth.input';
import { AuthResponse } from './auth.interface';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async register(@Args('data') input: AuthInput) {
    return this.authService.register(input);
  }
}
