import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutRecipeIngredientsInput } from './ingredient-update-without-recipe-ingredients.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipeIngredientsInput } from './ingredient-create-without-recipe-ingredients.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutRecipeIngredientsInput {

    @Field(() => IngredientUpdateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipeIngredientsInput)
    update!: IngredientUpdateWithoutRecipeIngredientsInput;

    @Field(() => IngredientCreateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipeIngredientsInput)
    create!: IngredientCreateWithoutRecipeIngredientsInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
