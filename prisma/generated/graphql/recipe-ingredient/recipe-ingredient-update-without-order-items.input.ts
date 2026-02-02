import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-recipe-ingredients-nested.input';
import { IngredientUpdateOneRequiredWithoutRecipesNestedInput } from '../ingredient/ingredient-update-one-required-without-recipes-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutOrderItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => String, {nullable:true})
    price?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput;

    @Field(() => IngredientUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    ingredient?: IngredientUpdateOneRequiredWithoutRecipesNestedInput;
}
