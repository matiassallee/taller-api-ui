const { expect } = require('chai');
const axios = require('axios');


const HomePage = require('../page-repository/pages/home/home.po');
const articleRequest = require('../../api/articleHandler');
const author = 'tallerTest';
let article
describe('Homepage - Elements verification', () => {
  before(() => {
    browser.url('/');
  });
  it('Should have Conduit displayed in the view port', () => {
    expect(HomePage.txtConduit.waitForDisplayed('Login link is not displayed'));
  });
  it('Should get the articles for the author', async () => {
    console.log(await articleRequest.getAuthorArticles(author));
  });
});
