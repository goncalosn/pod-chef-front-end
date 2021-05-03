import { getNodes, getNode } from "../configs/nodes";

export default {
  getNodes: () => getNodes("http://localhost:1323/nodes"),
  getNode: (node) => getNode("http://localhost:1323/node", node),
};
