import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumUnitWithAggregatesFilter } from '../prisma/enum-unit-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereWithAggregatesInput)
    AND?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereWithAggregatesInput)
    OR?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereWithAggregatesInput)
    NOT?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iconUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    quantity?: DecimalWithAggregatesFilter;

    @Field(() => EnumUnitWithAggregatesFilter, {nullable:true})
    unit?: EnumUnitWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ingredientId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
