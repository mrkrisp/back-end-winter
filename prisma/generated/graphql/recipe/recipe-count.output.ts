import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeCount {

    @Field(() => Int, {nullable:false})
    recipeIngredients?: number;

    @Field(() => Int, {nullable:false})
    recipeSteps?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    likes?: number;
}
