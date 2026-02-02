import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from '../recipe-ingredient/recipe-ingredient-create-nested-many-without-recipe.input';
import { RecipeStepCreateNestedManyWithoutRecipeInput } from '../recipe-step/recipe-step-create-nested-many-without-recipe.input';
import { CommentCreateNestedManyWithoutRecipeInput } from '../comment/comment-create-nested-many-without-recipe.input';
import { LikeCreateNestedManyWithoutRecipeInput } from '../like/like-create-nested-many-without-recipe.input';

@InputType()
export class RecipeCreateWithoutAuthorInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeStepCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeSteps?: RecipeStepCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutRecipeInput;

    @Field(() => LikeCreateNestedManyWithoutRecipeInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutRecipeInput;
}
