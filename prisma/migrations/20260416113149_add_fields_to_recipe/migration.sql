-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'DESSERT', 'DRINKS');

-- CreateEnum
CREATE TYPE "DietaryPreference" AS ENUM ('VEGETARIAN', 'LOW_CARB', 'GLUTEN_FREE', 'KETO', 'DAIRY_FREE');

-- CreateEnum
CREATE TYPE "HealthGoal" AS ENUM ('WEIGHT_LOSS', 'MUSCLE_GAIN', 'HEART_HEALTH');

-- CreateEnum
CREATE TYPE "Cuisine" AS ENUM ('RUSSIAN', 'ITALIAN', 'CHINESE', 'MEXICAN', 'INDIAN', 'FRENCH');

-- CreateEnum
CREATE TYPE "SpecialOccasion" AS ENUM ('HOLIDAY', 'BIRTHDAY', 'ANNIVERSARY', 'PARTY');

-- AlterTable
ALTER TABLE "recipe_steps" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "cuisine" "Cuisine" NOT NULL DEFAULT 'RUSSIAN',
ADD COLUMN     "dietaryPreference" "DietaryPreference" NOT NULL DEFAULT 'VEGETARIAN',
ADD COLUMN     "healthGoal" "HealthGoal" NOT NULL DEFAULT 'WEIGHT_LOSS',
ADD COLUMN     "image" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mealType" "MealType" NOT NULL DEFAULT 'BREAKFAST',
ADD COLUMN     "specialOccasion" "SpecialOccasion" NOT NULL DEFAULT 'HOLIDAY';
