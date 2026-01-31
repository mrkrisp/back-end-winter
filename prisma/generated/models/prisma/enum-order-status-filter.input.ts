import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from './order-status.enum';
import { NestedEnumOrderStatusFilter } from './nested-enum-order-status-filter.input';

@InputType()
export class EnumOrderStatusFilter {

    @Field(() => OrderStatus, {nullable:true})
    equals?: `${OrderStatus}`;

    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<`${OrderStatus}`>;

    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<`${OrderStatus}`>;

    @Field(() => NestedEnumOrderStatusFilter, {nullable:true})
    not?: NestedEnumOrderStatusFilter;
}
