import { ApiConfig } from "../../config/api";
import { httpClient } from "../../infra/http";
import { Meal, MealCategory, MealDetail } from "../model";

export const getMealCategories = async(): Promise<MealCategory[]> => {
    const response = await httpClient.get(ApiConfig.MEAL_API_BASE_URL)
    return response.data.mealcategories
}

export const getMeal = async(data: string): Promise<Meal[]> => {
    const response = await httpClient.get(ApiConfig.getMealCategory(data))
    return response.data.meals
}

export const getMealDetail = async(data: string): Promise<MealDetail> => {
    const response = await httpClient.get(ApiConfig.getMealDetail(data))
    return response.data.mealdetails
}