import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeIngredientOrderByWithRelationInput } from '../recipe-ingredient/recipe-ingredient-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipeIngredientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => RecipeIngredientOrderByWithRelationInput, {nullable:true})
    @Type(() => RecipeIngredientOrderByWithRelationInput)
    recipeIngredient?: RecipeIngredientOrderByWithRelationInput;
}
