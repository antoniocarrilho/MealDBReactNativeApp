import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Category">
            <Stack.Screen name="category" component={} />
        </Stack.Navigator>
    )
}

export default AppNavigator