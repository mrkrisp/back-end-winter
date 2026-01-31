import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumActivityLevelNullableWithAggregatesFilter } from '../prisma/enum-activity-level-nullable-with-aggregates-filter.input';
import { EnumNutritionGoalNullableWithAggregatesFilter } from '../prisma/enum-nutrition-goal-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BodyMeasurementScalarWhereWithAggregatesInput {

    @Field(() => [BodyMeasurementScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BodyMeasurementScalarWhereWithAggregatesInput>;

    @Field(() => [BodyMeasurementScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BodyMeasurementScalarWhereWithAggregatesInput>;

    @Field(() => [BodyMeasurementScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BodyMeasurementScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    heightCm?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    weightKg?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    goalWeightKg?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    waistCm?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    chestCm?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    thighCm?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    armCm?: IntNullableWithAggregatesFilter;

    @Field(() => EnumActivityLevelNullableWithAggregatesFilter, {nullable:true})
    activityLevel?: EnumActivityLevelNullableWithAggregatesFilter;

    @Field(() => EnumNutritionGoalNullableWithAggregatesFilter, {nullable:true})
    nutritionGoal?: EnumNutritionGoalNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
