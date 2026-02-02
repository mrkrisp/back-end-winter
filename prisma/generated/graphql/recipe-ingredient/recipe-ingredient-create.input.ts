import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeCreateNestedOneWithoutRecipeIngredientsInput } from '../recipe/recipe-create-nested-one-without-recipe-ingredients.input';
import { IngredientCreateNestedOneWithoutRecipesInput } from '../ingredient/ingredient-create-nested-one-without-recipes.input';
import { OrderItemCreateNestedManyWithoutRecipeIngredientInput } from '../order-item/order-item-create-nested-many-without-recipe-ingredient.input';

@InputType()
export class RecipeIngredientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Unit, {nullable:false})
    unit!: `${Unit}`;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutRecipeIngredientsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutRecipeIngredientsInput;

    @Field(() => IngredientCreateNestedOneWithoutRecipesInput, {nullable:false})
    ingredient!: IngredientCreateNestedOneWithoutRecipesInput;

    @Field(() => OrderItemCreateNestedManyWithoutRecipeIngredientInput, {nullable:true})
    orderItems?: OrderItemCreateNestedManyWithoutRecipeIngredientInput;
}
