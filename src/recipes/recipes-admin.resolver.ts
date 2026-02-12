import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'

import { Role } from 'prisma/generated/enums'
import { Auth } from '../auth/decorators/auth.decorator'
import { RecipeCreateInput, RecipeUpdateInput } from './inputs/recipe.input'
import { RecipeModel } from './models/recipe.model'
import { AdminRecipesService } from './recipes-admin.service'

@Resolver()
export class AdminRecipesResolver {
	constructor(private readonly adminRecipesService: AdminRecipesService) {}

	@Auth(Role.ADMIN)
	@Query(() => [RecipeModel], { name: 'adminRecipes' })
	getAllAdmin() {
		return this.adminRecipesService.getAllAdmin()
	}

	@Auth(Role.ADMIN)
	@Query(() => RecipeModel)
	findRecipeById(@Args('id') id: string) {
		return this.adminRecipesService.findById(id)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => RecipeModel)
	createRecipe(
		@CurrentUser('id') authorId: string,
		@Args('input') input: RecipeCreateInput
	) {
		return this.adminRecipesService.createRecipe(authorId, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => RecipeModel)
	updateRecipe(
		@Args('id') id: string,
		@Args('input') input: RecipeUpdateInput
	) {
		return this.adminRecipesService.updateRecipe(id, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean)
	deleteRecipeById(@Args('id') id: string) {
		return this.adminRecipesService.deleteRecipeById(id)
	}
}
