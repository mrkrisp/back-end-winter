import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';
import { NestedEnumGenderNullableFilter } from './nested-enum-gender-nullable-filter.input';

@InputType()
export class EnumGenderNullableFilter {

    @Field(() => Gender, {nullable:true})
    equals?: `${Gender}`;

    @Field(() => [Gender], {nullable:true})
    in?: Array<`${Gender}`>;

    @Field(() => [Gender], {nullable:true})
    notIn?: Array<`${Gender}`>;

    @Field(() => NestedEnumGenderNullableFilter, {nullable:true})
    not?: NestedEnumGenderNullableFilter;
}
