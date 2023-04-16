import { Meal } from "../../../data/model";
import { MealCategory } from "../../../data/model";


export interface UseListMealResult {
    isLoading: boolean,
    meals: Meal[],
}

export interface UseListMealCategoryResult {
    isLoading: boolean,
    mealsCategory: MealCategory[],
}