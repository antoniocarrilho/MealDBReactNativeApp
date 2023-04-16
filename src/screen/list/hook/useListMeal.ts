import { Meal } from "../../../data/model"
import { mealDbService } from "../../../data/service"
import { UseListMealResult } from "./interface"
import { useEffect, useState } from "react"

const ListMealCategories = () => {
    
    const useListMealsCaterory = ({ categoryName }): UseListMealResult => {
        const [isLoading, setIsLoading] = useState(false)
        const [meals, setMeal] = useState<Meal[]>([])

        const getCategory = async (): Promise<Meal[]> => {
            const result = await mealDbService.getMeal(categoryName)
            return result
        }

        useEffect(() => {
            const loadMeal = async () => {
                setIsLoading(true)
                const result = await getCategory()
                setIsLoading(false)
                setMeal(result)
            }
        }, [])

        return {
            isLoading,
            meals, 
        }

    }
}

export default ListMealCategories