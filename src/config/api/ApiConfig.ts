export const MEAL_API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

export function getMealCategory(str: string) :string {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`
}

export function getMealDetail(str: string) :string {
    return `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${str}`
}
