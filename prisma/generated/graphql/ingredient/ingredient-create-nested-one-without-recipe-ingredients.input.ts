import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipeIngredientsInput } from './ingredient-create-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipeIngredientsInput } from './ingredient-create-or-connect-without-recipe-ingredients.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutRecipeIngredientsInput {

    @Field(() => IngredientCreateWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipeIngredientsInput)
    create?: IngredientCreateWithoutRecipeIngredientsInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipeIngredientsInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipeIngredientsInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeIngredientsInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
