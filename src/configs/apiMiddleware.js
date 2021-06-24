import axios from "axios";

const serverURL = process.env.REACT_APP_NODE_URI;

export const apiRequest = (method, route, params) => {
  let currentUser = sessionStorage.getItem("user");
  return new Promise((resolve, reject) => {
    let serviceUrl = serverURL + route;

    axios({
      method: method,
      url: serviceUrl,
      headers: {
        ...(currentUser && {
          Authorization: "Bearer " + JSON.parse(currentUser).token,
        }),
      },
      data: params.jsonData,
    })
      .then((response) => resolve(response.data))
      .catch((error) => {
        try {
          reject(error.response.data.message);
        } catch (err) {
          err.response && reject("Error getting data");

          reject(error.response.statusText);
        }
      });
  });
};
