import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';
import { NestedEnumActivityLevelNullableWithAggregatesFilter } from './nested-enum-activity-level-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumActivityLevelNullableFilter } from './nested-enum-activity-level-nullable-filter.input';

@InputType()
export class EnumActivityLevelNullableWithAggregatesFilter {

    @Field(() => ActivityLevel, {nullable:true})
    equals?: `${ActivityLevel}`;

    @Field(() => [ActivityLevel], {nullable:true})
    in?: Array<`${ActivityLevel}`>;

    @Field(() => [ActivityLevel], {nullable:true})
    notIn?: Array<`${ActivityLevel}`>;

    @Field(() => NestedEnumActivityLevelNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumActivityLevelNullableFilter, {nullable:true})
    _min?: NestedEnumActivityLevelNullableFilter;

    @Field(() => NestedEnumActivityLevelNullableFilter, {nullable:true})
    _max?: NestedEnumActivityLevelNullableFilter;
}
