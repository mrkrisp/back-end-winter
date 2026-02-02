import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';

@ObjectType()
export class Ingredient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Unit, {nullable:false})
    defaultUnit!: `${Unit}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RecipeIngredient], {nullable:true})
    recipes?: Array<RecipeIngredient>;
}
