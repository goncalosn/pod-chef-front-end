import { apiRequest } from "../configs/apiMiddleware";

const deployments = {
  getDeployments: () => apiRequest("GET", "/deployments"),
};

export default deployments;
