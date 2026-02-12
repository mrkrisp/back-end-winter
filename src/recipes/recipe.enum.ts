import { registerEnumType } from '@nestjs/graphql'

export enum Difficulty {
	EASY = 'EASY',
	MEDIUM = 'MEDIUM',
	HARD = 'HARD'
}

registerEnumType(Difficulty, { name: 'Difficulty', description: undefined })

export enum Unit {
	MILLILITER = 'MILLILITER',
	GRAM = 'GRAM',
	PIECE = 'PIECE',
	TABLESPOON = 'TABLESPOON',
	TEASPOON = 'TEASPOON',
	CLOVES = 'CLOVES'
}

registerEnumType(Unit, { name: 'Unit', description: undefined })
