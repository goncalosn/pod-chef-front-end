import axios from "axios";

// GET request for remote image in node.js
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
