import { apiRequest } from "../configs/apiMiddleware";

const users = {
  signIn: (jsonData) => apiRequest("POST", "/login", { jsonData }),
  signUp: (jsonData) => apiRequest("POST", "/signup", { jsonData }),
  getAll: (jsonData) => apiRequest("GET", "/users", { jsonData }),
  getUser: (jsonData) => apiRequest("POST", "/user", { jsonData }),
  delete: (jsonData) => apiRequest("DELETE", "/user", { jsonData }),
  getUserProfile: (jsonData) =>
    apiRequest("GET", "/user/profile", { jsonData }),
  updateUserRole: (jsonData) => apiRequest("PUT", "/user/role", { jsonData }),
  updateOwnName: (jsonData) => apiRequest("PUT", "/user/name", { jsonData }),
  updateOwnPassword: (jsonData) =>
    apiRequest("PUT", "/user/password", { jsonData }),
  resetUserPassword: (jsonData) =>
    apiRequest("POST", "/user/password-reset", { jsonData }),
};

export default users;
