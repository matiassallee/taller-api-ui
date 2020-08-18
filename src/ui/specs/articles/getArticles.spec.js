const { expect } = require('chai');
const axios = require('axios');

const articleRequest = require('../../../api/articleHandler');
const dataWrapper = require('../../wrappers/data.wrapper')
const author = dataWrapper.getAdminUser().author;

describe('Articles - Get author articles', () => {
  it('Should get the articles for the author', async () => {
    console.log(await articleRequest.getAuthorArticles(author));
  });
});
