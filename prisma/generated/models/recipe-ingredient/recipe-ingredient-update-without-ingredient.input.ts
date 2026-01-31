import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Unit } from '../prisma/unit.enum';
import { RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-recipe-ingredients-nested.input';
import { OrderItemUpdateManyWithoutRecipeIngredientNestedInput } from '../order-item/order-item-update-many-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutIngredientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity?: Decimal;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput;

    @Field(() => OrderItemUpdateManyWithoutRecipeIngredientNestedInput, {nullable:true})
    @Type(() => OrderItemUpdateManyWithoutRecipeIngredientNestedInput)
    orderItems?: OrderItemUpdateManyWithoutRecipeIngredientNestedInput;
}
