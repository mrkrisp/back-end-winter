import { Args, Query, Resolver } from '@nestjs/graphql'
import { RecipesQueryInput } from './inputs/get-recipes-query.input'
import { RecipeModel } from './models/recipe.model'
import { RecipesService } from './recipes.service'

@Resolver()
export class RecipesResolver {
	constructor(private readonly recipesService: RecipesService) {}

	@Query(() => [RecipeModel], { name: 'recipes' })
	getAll(@Args('input') input: RecipesQueryInput) {
		return this.recipesService.getAll(input)
	}

	@Query(() => RecipeModel)
	findBySlug(@Args('slug') slug: string) {
		return this.recipesService.findBySlug(slug)
	}
}
