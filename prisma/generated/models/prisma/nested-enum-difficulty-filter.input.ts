import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';

@InputType()
export class NestedEnumDifficultyFilter {

    @Field(() => Difficulty, {nullable:true})
    equals?: `${Difficulty}`;

    @Field(() => [Difficulty], {nullable:true})
    in?: Array<`${Difficulty}`>;

    @Field(() => [Difficulty], {nullable:true})
    notIn?: Array<`${Difficulty}`>;

    @Field(() => NestedEnumDifficultyFilter, {nullable:true})
    not?: NestedEnumDifficultyFilter;
}
