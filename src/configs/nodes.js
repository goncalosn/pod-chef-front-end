import axios from "axios";

// GET request for nodes
export const GetNodes = (url) =>
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

// GET request for node stats
export const GetNode = (url, node) =>
  axios
    .get(url, { params: { node: node } })
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
