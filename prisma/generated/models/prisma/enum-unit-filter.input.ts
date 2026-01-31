import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from './unit.enum';
import { NestedEnumUnitFilter } from './nested-enum-unit-filter.input';

@InputType()
export class EnumUnitFilter {

    @Field(() => Unit, {nullable:true})
    equals?: `${Unit}`;

    @Field(() => [Unit], {nullable:true})
    in?: Array<`${Unit}`>;

    @Field(() => [Unit], {nullable:true})
    notIn?: Array<`${Unit}`>;

    @Field(() => NestedEnumUnitFilter, {nullable:true})
    not?: NestedEnumUnitFilter;
}
