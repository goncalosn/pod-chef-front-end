import axios from "axios";

const user = JSON.parse(sessionStorage.getItem("user"));

// GET request for nodes
export const getNodes = (url) =>
  axios
    .get(url, {
      headers: { Authorization: "Bearer " + user.token },
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

// GET request for node stats
export const getNode = (url, node) =>
  axios
    .get(url, {
      headers: { Authorization: "Bearer " + user.token },
      params: { node: node },
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
