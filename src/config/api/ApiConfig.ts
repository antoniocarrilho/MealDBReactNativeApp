export const MEAL_API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

export function getMealCategory(str: string) {
    return `${MEAL_API_BASE_URL}/filter.php?c=${str}`
}

export function getMealDetail(str: string) {
    return `${MEAL_API_BASE_URL}/lookup.php?i=${str}`
}
