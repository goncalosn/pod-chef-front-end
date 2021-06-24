import { apiRequest } from "../configs/apiMiddleware";

const nodes = {
  getNodes: (jsonData) => apiRequest("GET", "/nodes", { jsonData }),
  getNode: (jsonData) => apiRequest("POST", "/node", { jsonData }),
};

export default nodes;
