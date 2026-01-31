import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOrderStatusFilter } from './nested-enum-order-status-filter.input';

@InputType()
export class NestedEnumOrderStatusWithAggregatesFilter {

    @Field(() => OrderStatus, {nullable:true})
    equals?: `${OrderStatus}`;

    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<`${OrderStatus}`>;

    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<`${OrderStatus}`>;

    @Field(() => NestedEnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOrderStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _min?: NestedEnumOrderStatusFilter;

    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    _max?: NestedEnumOrderStatusFilter;
}
