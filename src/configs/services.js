import axios from "axios";

// GET request for services
export const getServices = (url, namespace) =>
  axios
    .get(url, {
      params: { namespace: namespace == null ? "default" : namespace },
    })
    .then(function (response) {
      return Promise.resolve(response.data);
    })
    .catch(function (error) {
      try {
        return Promise.reject(error.response.data.Message);
      } catch (err) {
        return Promise.reject(error.message);
      }
    });

// GET request for a service stats
export const getService = (url, service, namespace) =>
  axios
    .get(url, {
      params: {
        name: service,
        namespace: namespace == null ? "default" : namespace,
      },
    })
    .then(function (response) {
      return Promise.resolve(response.data);
    })
    .catch(function (error) {
      try {
        return Promise.reject(error.response.data.Message);
      } catch (err) {
        return Promise.reject(error.message);
      }
    });
