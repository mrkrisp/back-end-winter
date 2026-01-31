import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Unit } from '../prisma/unit.enum';
import { RecipeCreateNestedOneWithoutRecipeIngredientsInput } from '../recipe/recipe-create-nested-one-without-recipe-ingredients.input';
import { IngredientCreateNestedOneWithoutRecipesInput } from '../ingredient/ingredient-create-nested-one-without-recipes.input';

@InputType()
export class RecipeIngredientCreateWithoutOrderItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity!: Decimal;

    @Field(() => Unit, {nullable:false})
    unit!: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutRecipeIngredientsInput)
    recipe!: RecipeCreateNestedOneWithoutRecipeIngredientsInput;

    @Field(() => IngredientCreateNestedOneWithoutRecipesInput, {nullable:false})
    @Type(() => IngredientCreateNestedOneWithoutRecipesInput)
    ingredient!: IngredientCreateNestedOneWithoutRecipesInput;
}
