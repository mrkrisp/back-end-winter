import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientScalarFieldEnum {
    id = "id",
    iconUrl = "iconUrl",
    name = "name",
    description = "description",
    quantity = "quantity",
    unit = "unit",
    price = "price",
    recipeId = "recipeId",
    ingredientId = "ingredientId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeIngredientScalarFieldEnum, { name: 'RecipeIngredientScalarFieldEnum', description: undefined })
