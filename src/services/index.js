import deploymentsService from "./deployments";
import nodesService from "./nodes";
import servicesService from "./services";
import namespacesService from "./namespaces";
import userService from "./user";

export default {
  deployments: deploymentsService,
  nodes: nodesService,
  services: servicesService,
  namespaces: namespacesService,
  user: userService,
};
