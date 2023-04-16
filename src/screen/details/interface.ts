import { RouteProp } from "@react-navigation/native"
import { Meal } from "../../data/model"
import { AppStackParamList } from "../../navigation/interface"

export type DetailsMealsScreenParams = {
    meal: Meal,
}

export type DetailsMealRouteProp = RouteProp<AppStackParamList, 'Details'>