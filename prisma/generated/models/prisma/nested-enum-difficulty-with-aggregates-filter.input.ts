import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDifficultyFilter } from './nested-enum-difficulty-filter.input';

@InputType()
export class NestedEnumDifficultyWithAggregatesFilter {

    @Field(() => Difficulty, {nullable:true})
    equals?: `${Difficulty}`;

    @Field(() => [Difficulty], {nullable:true})
    in?: Array<`${Difficulty}`>;

    @Field(() => [Difficulty], {nullable:true})
    notIn?: Array<`${Difficulty}`>;

    @Field(() => NestedEnumDifficultyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDifficultyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDifficultyFilter, {nullable:true})
    _min?: NestedEnumDifficultyFilter;

    @Field(() => NestedEnumDifficultyFilter, {nullable:true})
    _max?: NestedEnumDifficultyFilter;
}
