import { GetNodes, GetNode } from "../configs/nodes";

export default {
  getNodes: () => GetNodes("http://localhost:1323/nodes"),
  getNode: (node) => GetNode("http://localhost:1323/node", node),
};
