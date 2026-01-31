import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionGoal } from './nutrition-goal.enum';
import { NestedEnumNutritionGoalNullableWithAggregatesFilter } from './nested-enum-nutrition-goal-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumNutritionGoalNullableFilter } from './nested-enum-nutrition-goal-nullable-filter.input';

@InputType()
export class EnumNutritionGoalNullableWithAggregatesFilter {

    @Field(() => NutritionGoal, {nullable:true})
    equals?: `${NutritionGoal}`;

    @Field(() => [NutritionGoal], {nullable:true})
    in?: Array<`${NutritionGoal}`>;

    @Field(() => [NutritionGoal], {nullable:true})
    notIn?: Array<`${NutritionGoal}`>;

    @Field(() => NestedEnumNutritionGoalNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNutritionGoalNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumNutritionGoalNullableFilter, {nullable:true})
    _min?: NestedEnumNutritionGoalNullableFilter;

    @Field(() => NestedEnumNutritionGoalNullableFilter, {nullable:true})
    _max?: NestedEnumNutritionGoalNullableFilter;
}
