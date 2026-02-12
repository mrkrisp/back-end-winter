import { Module } from '@nestjs/common'
import { IngredientsModule } from './ingredients/ingredients.module'
import { ReactionModule } from './reaction/reaction.module'
import { AdminRecipesResolver } from './recipes-admin.resolver'
import { AdminRecipesService } from './recipes-admin.service'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
	providers: [
		RecipesResolver,
		AdminRecipesResolver,
		RecipesService,
		AdminRecipesService
	],
	imports: [IngredientsModule, ReactionModule],
	exports: [RecipesService, AdminRecipesService]
})
export class RecipesModule {}
