import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';
import { NestedEnumActivityLevelNullableFilter } from './nested-enum-activity-level-nullable-filter.input';

@InputType()
export class EnumActivityLevelNullableFilter {

    @Field(() => ActivityLevel, {nullable:true})
    equals?: `${ActivityLevel}`;

    @Field(() => [ActivityLevel], {nullable:true})
    in?: Array<`${ActivityLevel}`>;

    @Field(() => [ActivityLevel], {nullable:true})
    notIn?: Array<`${ActivityLevel}`>;

    @Field(() => NestedEnumActivityLevelNullableFilter, {nullable:true})
    not?: NestedEnumActivityLevelNullableFilter;
}
