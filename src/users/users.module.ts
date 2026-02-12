import { Module } from '@nestjs/common'
import './user.enum'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

@Module({
	providers: [UsersResolver, UsersService],
	exports: [UsersService]
})
export class UsersModule {}
