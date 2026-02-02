import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumUnitWithAggregatesFilter } from '../prisma/enum-unit-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class IngredientScalarWhereWithAggregatesInput {

    @Field(() => [IngredientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<IngredientScalarWhereWithAggregatesInput>;

    @Field(() => [IngredientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<IngredientScalarWhereWithAggregatesInput>;

    @Field(() => [IngredientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<IngredientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumUnitWithAggregatesFilter, {nullable:true})
    defaultUnit?: EnumUnitWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
