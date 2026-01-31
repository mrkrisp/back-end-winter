import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumActivityLevelNullableFilter } from '../prisma/enum-activity-level-nullable-filter.input';
import { EnumNutritionGoalNullableFilter } from '../prisma/enum-nutrition-goal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class BodyMeasurementWhereInput {

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    AND?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    OR?: Array<BodyMeasurementWhereInput>;

    @Field(() => [BodyMeasurementWhereInput], {nullable:true})
    NOT?: Array<BodyMeasurementWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    heightCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    weightKg?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    goalWeightKg?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    waistCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chestCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    thighCm?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    armCm?: IntNullableFilter;

    @Field(() => EnumActivityLevelNullableFilter, {nullable:true})
    activityLevel?: EnumActivityLevelNullableFilter;

    @Field(() => EnumNutritionGoalNullableFilter, {nullable:true})
    nutritionGoal?: EnumNutritionGoalNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
