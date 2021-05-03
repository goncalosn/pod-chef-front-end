import axios from "axios";

// GET request for namespaces
export const getNamespaces = (url) =>
  axios
    .get(url, {})
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
