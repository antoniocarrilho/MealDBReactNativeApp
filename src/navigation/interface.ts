import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DetailsMealsScreenParams } from "../screen/details/interface";

export type AppStackParamList = {
    category: undefined
    Details: DetailsMealsScreenParams
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>