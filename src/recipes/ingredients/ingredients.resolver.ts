import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { IngredientsService } from './ingredients.service'
import { Auth } from '../../auth/decorators/auth.decorator'
import { IngredientCreateInput } from './inputs/ingredient-create.input'
import { Role } from '../../../prisma/generated/graphql/prisma'
import { IngredientModel } from './models/ingredient.model'

@Resolver()
export class IngredientsResolver {
	constructor(private readonly ingredientsService: IngredientsService) {}

	@Auth(Role.ADMIN)
	@Query(() => [IngredientModel], { name: 'ingredients' })
	getAll() {
		return this.ingredientsService.getAll()
	}

	@Auth(Role.ADMIN)
	@Query(() => IngredientModel)
	findById(@Args('id') id: string) {
		return this.ingredientsService.findById(id)
	}

	// @Auth(Role.ADMIN)
	// @Mutation(() => IngredientModel)
	// createIngredient(@Args('input') input: IngredientCreateInput) {
	// 	return this.ingredientsService.create(input)
	// }

	@Auth(Role.ADMIN)
	@Mutation(() => IngredientModel)
	updateIngredient(
		@Args('id') id: string,
		@Args('input') input: IngredientCreateInput
	) {
		return this.ingredientsService.update(id, input)
	}

	@Auth(Role.ADMIN)
	@Mutation(() => Boolean)
	deleteIngredientById(@Args('id') id: string) {
		return this.ingredientsService.deleteById(id)
	}
}
