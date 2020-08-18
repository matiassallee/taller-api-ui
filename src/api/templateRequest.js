/* eslint-disable no-console */
const axios = require('axios');

const apiRequest = {
  /**
   * Function to perform a post based on the postData(body) and the axiosConfig(headers and other
   * possible configurations). It'll return the result as a String or a console
   * log with the failed reason.
   * @param {url} url which will be directed the post request
   * @param {Object} postData body as a Json(example of object)
   * @param {Object} axiosConfig configuration as a Json (example of object)
   */
  post(url, postData, axiosConfig) {
    return axios.post(url, postData, axiosConfig)
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
  },
  /**
   * Function to perform a get based on the bodyData(body) and the axiosConfig(headers and other
   * possible configurations). It'll return the result as a String or a console
   * log with the failed reason.
   * @param {url} url which will be directed the post request
   * @param {Object} axiosConfig configuration as a Json (example of object)
   */
  get(url, axiosConfig) {
    return axios.get(url, axiosConfig)
      .then((res) => res)
      .catch(() => {
      });
  },
};

module.exports = apiRequest;