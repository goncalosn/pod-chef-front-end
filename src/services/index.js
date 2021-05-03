import deploymentsService from "./deployments";
import nodesService from "./nodes";
import servicesService from "./services";
import namespacesService from "./namespaces";

export default {
  deployments: deploymentsService,
  nodes: nodesService,
  services: servicesService,
  namespaces: namespacesService,
};
