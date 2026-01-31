import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-unchecked-create-nested-many-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeStepUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-unchecked-create-nested-many-without-recipe.input';
import { CommentUncheckedCreateNestedManyWithoutRecipeInput } from '../comment/comment-unchecked-create-nested-many-without-recipe.input';

@InputType()
export class RecipeUncheckedCreateWithoutLikesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:false})
    cookingTime!: number;

    @Field(() => Difficulty, {nullable:false})
    difficulty!: `${Difficulty}`;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput)
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeStepUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeSteps?: RecipeStepUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutRecipeInput;
}
