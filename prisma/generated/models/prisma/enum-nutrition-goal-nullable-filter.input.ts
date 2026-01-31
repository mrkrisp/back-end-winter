import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NutritionGoal } from './nutrition-goal.enum';
import { NestedEnumNutritionGoalNullableFilter } from './nested-enum-nutrition-goal-nullable-filter.input';

@InputType()
export class EnumNutritionGoalNullableFilter {

    @Field(() => NutritionGoal, {nullable:true})
    equals?: `${NutritionGoal}`;

    @Field(() => [NutritionGoal], {nullable:true})
    in?: Array<`${NutritionGoal}`>;

    @Field(() => [NutritionGoal], {nullable:true})
    notIn?: Array<`${NutritionGoal}`>;

    @Field(() => NestedEnumNutritionGoalNullableFilter, {nullable:true})
    not?: NestedEnumNutritionGoalNullableFilter;
}
