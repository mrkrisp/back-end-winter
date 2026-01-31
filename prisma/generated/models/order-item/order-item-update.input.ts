import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput } from '../recipe-ingredient/recipe-ingredient-update-one-required-without-order-items-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput)
    recipeIngredient?: RecipeIngredientUpdateOneRequiredWithoutOrderItemsNestedInput;
}
