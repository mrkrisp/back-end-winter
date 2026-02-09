import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutRecipeIngredientsInput } from './ingredient-update-without-recipe-ingredients.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutRecipeIngredientsInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipeIngredientsInput)
    data!: IngredientUpdateWithoutRecipeIngredientsInput;
}
