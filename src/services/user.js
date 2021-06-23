import { apiRequest } from "../configs/apiMiddleware";

const users = {
  signIn: (jsonData) => apiRequest("POST", "/login", { jsonData }),
  signUp: (jsonData) => apiRequest("POST", "/signup", { jsonData }),
};

export default users;
