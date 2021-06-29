import { apiRequest } from "../configs/apiMiddleware";

const deployments = {
  getAll: () => apiRequest("GET", "/deployments"),
  getDeploymentsByUser: (jsonData) =>
    apiRequest("POST", "/user/deployments", { jsonData }),
  delete: (jsonData) => apiRequest("DELETE", "/deployment", { jsonData }),
};

export default deployments;
