import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';
import { NestedEnumDifficultyFilter } from './nested-enum-difficulty-filter.input';

@InputType()
export class EnumDifficultyFilter {

    @Field(() => Difficulty, {nullable:true})
    equals?: `${Difficulty}`;

    @Field(() => [Difficulty], {nullable:true})
    in?: Array<`${Difficulty}`>;

    @Field(() => [Difficulty], {nullable:true})
    notIn?: Array<`${Difficulty}`>;

    @Field(() => NestedEnumDifficultyFilter, {nullable:true})
    not?: NestedEnumDifficultyFilter;
}
