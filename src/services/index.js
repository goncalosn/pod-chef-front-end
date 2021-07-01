import deploymentsService from "./deployments";
import nodesService from "./nodes";
import userService from "./user";
import whitelistService from "./whitelist";

const exports = {
  deployments: deploymentsService,
  nodes: nodesService,
  user: userService,
  whitelist: whitelistService,
};

export default exports;
