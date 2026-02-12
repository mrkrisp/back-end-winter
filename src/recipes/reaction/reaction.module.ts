import { Module } from '@nestjs/common'
import { ReactionResolver } from './reaction.resolver'
import { ReactionService } from './reaction.service'

@Module({
	providers: [ReactionResolver, ReactionService],
	exports: [ReactionService]
})
export class ReactionModule {}
