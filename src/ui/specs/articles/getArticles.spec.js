const { expect } = require('chai');
const axios = require('axios');


const HomePage = require('../../page-repository/pages/home/home.po');
const articleRequest = require('../../../api/articleHandler');
const author = 'tallerTest';

describe('Homepage - Elements verification', () => {
  it('Should get the articles for the author', async () => {
    console.log(await articleRequest.getAuthorArticles(author));
  });
});
