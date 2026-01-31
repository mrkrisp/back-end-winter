import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumUnitFilter } from '../prisma/enum-unit-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RecipeIngredientScalarWhereInput {

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    AND?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    OR?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    NOT?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    quantity?: DecimalFilter;

    @Field(() => EnumUnitFilter, {nullable:true})
    unit?: EnumUnitFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredientId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
