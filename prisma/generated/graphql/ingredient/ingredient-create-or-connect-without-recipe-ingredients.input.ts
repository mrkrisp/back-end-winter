import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipeIngredientsInput } from './ingredient-create-without-recipe-ingredients.input';

@InputType()
export class IngredientCreateOrConnectWithoutRecipeIngredientsInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipeIngredientsInput)
    create!: IngredientCreateWithoutRecipeIngredientsInput;
}
