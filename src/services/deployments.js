import { apiRequest } from "../configs/apiMiddleware";

const deployments = {
  getAll: (jsonData) => apiRequest("GET", "/deployments", { jsonData }),
  getMyDeployments: (jsonData) =>
    apiRequest("GET", "/my-deployments", { jsonData }),
  getDeploymentsByUser: (jsonData) =>
    apiRequest("POST", "/user/deployments", { jsonData }),
  delete: (jsonData) => apiRequest("DELETE", "/deployment", { jsonData }),
  create: (jsonData) => apiRequest("POST", "/deployment", { jsonData }),
};

export default deployments;
