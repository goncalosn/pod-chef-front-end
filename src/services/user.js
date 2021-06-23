import { apiRequest } from '../configs/apiMiddleware'

export default {
    signIn: (jsonData) => apiRequest("POST", "/login", { jsonData }),
    signUp: (jsonData) => apiRequest("POST", "/signup", { jsonData })
}