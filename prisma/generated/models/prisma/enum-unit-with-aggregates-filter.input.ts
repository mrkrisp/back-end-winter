import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from './unit.enum';
import { NestedEnumUnitWithAggregatesFilter } from './nested-enum-unit-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumUnitFilter } from './nested-enum-unit-filter.input';

@InputType()
export class EnumUnitWithAggregatesFilter {

    @Field(() => Unit, {nullable:true})
    equals?: `${Unit}`;

    @Field(() => [Unit], {nullable:true})
    in?: Array<`${Unit}`>;

    @Field(() => [Unit], {nullable:true})
    notIn?: Array<`${Unit}`>;

    @Field(() => NestedEnumUnitWithAggregatesFilter, {nullable:true})
    not?: NestedEnumUnitWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumUnitFilter, {nullable:true})
    _min?: NestedEnumUnitFilter;

    @Field(() => NestedEnumUnitFilter, {nullable:true})
    _max?: NestedEnumUnitFilter;
}
