import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-recipe-nested.input';
import { RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-unchecked-update-many-without-recipe-nested.input';
import { CommentUncheckedUpdateManyWithoutRecipeNestedInput } from '../comment/comment-unchecked-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUncheckedUpdateWithoutLikesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    cookingTime?: number;

    @Field(() => Difficulty, {nullable:true})
    difficulty?: `${Difficulty}`;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput;
}
