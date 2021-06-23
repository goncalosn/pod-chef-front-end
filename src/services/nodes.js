import { getNodes, getNode } from "../configs/nodes";

const nodes = {
  getNodes: () => getNodes("http://localhost:1323/nodes"),
  getNode: (node) => getNode("http://localhost:1323/node", node),
};

export default nodes;
