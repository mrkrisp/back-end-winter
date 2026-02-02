import { registerEnumType } from '@nestjs/graphql';

export enum IngredientScalarFieldEnum {
    id = "id",
    name = "name",
    defaultUnit = "defaultUnit",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(IngredientScalarFieldEnum, { name: 'IngredientScalarFieldEnum', description: undefined })
