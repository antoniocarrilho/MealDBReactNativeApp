import { MealCategory } from "../../../data/model"
import { mealDbService } from "../../../data/service"
import { UseListMealCategoryResult } from "./interface"
import { useEffect, useState } from "react"

const UseMealCategories = () => {
    
    const useListMealsCaterory = (): UseListMealCategoryResult => {
        const [isLoading, setIsLoading] = useState(false)
        const [mealsCategory, setCategory] = useState<MealCategory[]>([])

        const getCategory = async (): Promise<MealCategory[]> => {
            const result = await mealDbService.getMealCategories()
            return result
        }

        useEffect(() => {
            const loadCategory = async () => {
                setIsLoading(true)
                const result = await getCategory()
                setIsLoading(false)
                setCategory(result)
            }
        }, [])

        return {
            isLoading,
            mealsCategory, 
        }

    }
}

export default UseMealCategories