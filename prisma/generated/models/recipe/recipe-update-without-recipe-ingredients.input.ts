import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeStepUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-update-many-without-recipe-nested.input';
import { UserUpdateOneRequiredWithoutRecipesNestedInput } from '../user/user-update-one-required-without-recipes-nested.input';
import { CommentUpdateManyWithoutRecipeNestedInput } from '../comment/comment-update-many-without-recipe-nested.input';
import { LikeUpdateManyWithoutRecipeNestedInput } from '../like/like-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutRecipeIngredientsInput {

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

    @Field(() => RecipeStepUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUpdateManyWithoutRecipeNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput;

    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutRecipeNestedInput;
}
