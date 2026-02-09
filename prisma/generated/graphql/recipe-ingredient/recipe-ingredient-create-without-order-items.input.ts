import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeCreateNestedOneWithoutRecipeIngredientsInput } from '../recipe/recipe-create-nested-one-without-recipe-ingredients.input';
import { IngredientCreateNestedOneWithoutRecipeIngredientsInput } from '../ingredient/ingredient-create-nested-one-without-recipe-ingredients.input';

@InputType()
export class RecipeIngredientCreateWithoutOrderItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutRecipeIngredientsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutRecipeIngredientsInput;

    @Field(() => IngredientCreateNestedOneWithoutRecipeIngredientsInput, {nullable:false})
    ingredient!: IngredientCreateNestedOneWithoutRecipeIngredientsInput;
}
