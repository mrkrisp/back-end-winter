import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeIngredientUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-recipe-nested.input';
import { RecipeStepUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-update-many-without-recipe-nested.input';
import { CommentUpdateManyWithoutRecipeNestedInput } from '../comment/comment-update-many-without-recipe-nested.input';
import { LikeUpdateManyWithoutRecipeNestedInput } from '../like/like-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutAuthorInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeStepUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutRecipeNestedInput;
}
