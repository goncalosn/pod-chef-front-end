import { apiRequest } from "../configs/apiMiddleware";

export default {
  getDeployments: () => apiRequest("GET", "/deployments"),
}