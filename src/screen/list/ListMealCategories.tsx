import UseMealCategories from "./hook/useListMeal"
import { ListRenderItemInfo } from "react-native"
import { useCallback} from 'react'
import { Meal } from "../../data/model"
import { MealsItem } from "./components/item"

const ListCategories = () => {

    const { isLoading, mealsCategory} = UseMealCategories()

    const renderMealCategory = useCallback(({ category }: ListRenderItemInfo<Meal>) => 
        <MealsItem />)
}