import { apiRequest } from "../configs/apiMiddleware";

const deployments = {
  getAll: () => apiRequest("GET", "/deployments"),
  getDeploymentsByUser: (jsonData) =>
    apiRequest("GET", "/my-deployments", { jsonData }),
  delete: (jsonData) => apiRequest("DELETE", "/deployment", { jsonData }),
  create: (jsonData) => apiRequest("POST", "/deployment", { jsonData })
};

export default deployments;
