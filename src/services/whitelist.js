import { apiRequest } from "../configs/apiMiddleware";

const whitelist = {
  getAll: (jsonData) => apiRequest("GET", "/whitelist", { jsonData }),
  add: (jsonData) => apiRequest("POST", "/whitelist", { jsonData }),
  delete: (jsonData) => apiRequest("DELETE", "/whitelist", { jsonData }),
};

export default whitelist;
