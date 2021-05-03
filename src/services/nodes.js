import { GetNodes } from "../configs/nodes";

export default {
  getNodes: () => GetNodes("http://localhost:1323/nodes"),
};
