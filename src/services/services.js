import { getServices, getService } from "../configs/services";

export default {
  getServices: (namespace) =>
    getServices("http://localhost:1323/services", namespace),
  getService: (service, namespace) =>
    getService("http://localhost:1323/service", service, namespace),
};
