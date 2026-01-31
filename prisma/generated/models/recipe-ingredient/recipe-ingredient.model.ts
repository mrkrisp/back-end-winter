import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from 'prisma/generated/prisma/client/runtime/library';
import { Unit } from '../prisma/unit.enum';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../ingredient/ingredient.model';
import { OrderItem } from '../order-item/order-item.model';

@ObjectType()
export class RecipeIngredient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => Unit, {nullable:false})
    unit!: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;

    @Field(() => Ingredient, {nullable:false})
    ingredient?: Ingredient;

    @Field(() => [OrderItem], {nullable:true})
    orderItems?: Array<OrderItem>;
}
