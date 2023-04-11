import axios from "axios";
import { ApiConfig } from "../../config/api";

const httpClient = axios.create({ 
    baseURL: ApiConfig.MEAL_API_BASE_URL,
})

export default httpClient