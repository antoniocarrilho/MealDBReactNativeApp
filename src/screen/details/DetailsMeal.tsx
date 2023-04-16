import { useRoute } from "@react-navigation/native"
import { DetailsMealRouteProp } from "./interface"
import { Linking } from "react-native"

const DetailMeals = () => {
    const { params: { meal }} = useRoute<DetailsMealRouteProp>()

    const openArticle = () => {
        Linking.openURL
    }

}

export default DetailMeals