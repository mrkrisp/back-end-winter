import { Args, Query, Resolver } from '@nestjs/graphql'
import { Auth } from '../auth/decorators/auth.decorator'
import { Role } from '../../prisma/generated/graphql/prisma'
import { IngredientModel } from './ingredients/models/ingredient.model'
import { AdminRecipesService } from './recipes-admin.service'

@Resolver()
export class AdminRecipesResolver {
	constructor(private readonly adminRecipesService: AdminRecipesService) {}

	@Auth(Role.ADMIN)
	@Query(() => [IngredientModel], { name: 'recipes' })
	getAll() {
		return this.adminRecipesService.getAll()
	}

	@Auth(Role.ADMIN)
	@Query(() => IngredientModel)
	findById(@Args('id') id: string) {
		return this.adminRecipesService.findById(id)
	}
}
