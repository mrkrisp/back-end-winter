import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { RecipeStep } from '../recipe-step/recipe-step.model';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';

@ObjectType()
export class Recipe {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RecipeIngredient], {nullable:true})
    recipeIngredients?: Array<RecipeIngredient>;

    @Field(() => [RecipeStep], {nullable:true})
    recipeSteps?: Array<RecipeStep>;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
}
