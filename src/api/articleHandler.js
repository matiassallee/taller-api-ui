/* eslint-disable no-async-promise-executor */
/* eslint-disable max-len */

const templateRequests = require('../api/templateRequest');

const baseRequests = {
  /**
   * Function to get all the articles for an author
   * @param {String} author that we want to get the articles for
   */
  getAuthorArticles(author) {
    return new Promise(async (resolve, reject) => {
        const getUrl = `http://conduit.productionready.io/api/articles?author=${author}`;
        const response = await templateRequests.get(getUrl);
        try {
            resolve(response.data);
        } catch (e) {
            reject(e);
        }
    });
  },
};

module.exports = baseRequests;