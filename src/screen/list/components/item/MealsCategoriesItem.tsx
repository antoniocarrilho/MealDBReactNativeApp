import { useNavigation } from "@react-navigation/native"
import { MealItemProps } from "./interface"
import { AppNavigatorProps } from "../../../../navigation/interface"
import { Pressable } from "react-native"
import styles from "./Styles"

const MealsItem = ({ meal }: MealItemProps) => {

    const navigator = useNavigation<AppNavigatorProps>()

    const openDetails = () => {
        navigator.navigate('Details', { meal })
    }

    return (
        <Pressable style={styles.container} onPress={}>

        </Pressable>
    )
}