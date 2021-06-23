import deploymentsService from "./deployments";
import nodesService from "./nodes";
import userService from "./user";

const exports = {
  deployments: deploymentsService,
  nodes: nodesService,
  user: userService,
};

export default exports;
