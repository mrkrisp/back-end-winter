import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AdminRecipesService } from './recipes-admin.service'
import { AdminRecipesResolver } from './recipes-admin.resolver'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  providers: [RecipesResolver, AdminRecipesResolver, RecipesService, AdminRecipesService],
  imports: [IngredientsModule, PrismaModule],
})
export class RecipesModule {}
