import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Auth } from '../auth/decorators/auth.decorator'
import { Role } from '../../prisma/generated/graphql/prisma'
import { RecipeModel } from './models/recipe.model'

@Resolver()
export class RecipesResolver {
	constructor(private readonly recipesService: RecipesService) {}

	// @Query(() => RecipeModel)
	// findBySlug(@Args('slug') slug: string) {
	// 	return this.recipesService.findBySlug(slug);
	// }

	// @Mutation(() => IngredientModel)
	// createIngredient(@Args('input') input: IngredientCreateInput) {
	// 	return this.recipesService.create(input)
	// }

	// @Mutation(() => IngredientModel)
	// updateIngredient(
	// 	@Args('id') id: string,
	// 	@Args('input') input: IngredientCreateInput
	// ) {
	// 	return this.recipesService.update(id, input)
	// }

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean)
	deleteRecipeById(@Args('id') id: string) {
		return this.recipesService.deleteById(id)
	}
}
