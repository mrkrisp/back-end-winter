import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput } from '../ingredient/ingredient-update-one-required-without-recipe-ingredients-nested.input';
import { OrderItemUpdateManyWithoutRecipeIngredientNestedInput } from '../order-item/order-item-update-many-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput, {nullable:true})
    ingredient?: IngredientUpdateOneRequiredWithoutRecipeIngredientsNestedInput;

    @Field(() => OrderItemUpdateManyWithoutRecipeIngredientNestedInput, {nullable:true})
    orderItems?: OrderItemUpdateManyWithoutRecipeIngredientNestedInput;
}
