import { apiRequest } from "../configs/apiMiddleware";

const users = {
  signIn: (jsonData) => apiRequest("POST", "/login", { jsonData }),
  signUp: (jsonData) => apiRequest("POST", "/signup", { jsonData }),
  getAll: (jsonData) => apiRequest("GET", "/users", { jsonData }),
  getUser: (jsonData) => apiRequest("POST", "/user", { jsonData }),
  delete: (jsonData) => apiRequest("DELETE", "/user", { jsonData }),
};

export default users;
