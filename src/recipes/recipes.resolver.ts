import { Args, Query, Resolver } from '@nestjs/graphql'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { RecipesQueryInput } from './inputs/get-recipes-query.input'
import { RecipeModel } from './models/recipe.model'
import { RecipesService } from './recipes.service'

@Resolver()
export class RecipesResolver {
	constructor(private readonly recipesService: RecipesService) {}

	@Auth()
	@Query(() => [RecipeModel], { name: 'recipes' })
	getAll(
		@Args('input') input: RecipesQueryInput,
		@CurrentUser('id') userId: string
	) {
		return this.recipesService.getAll(input, userId)
	}

	@Query(() => RecipeModel)
	findBySlug(@Args('slug') slug: string) {
		return this.recipesService.findBySlug(slug)
	}
}
