const { expect } = require('chai');

const HomePage = require('../page-repository/pages/home/home.po');

describe('Homepage - Elements verification', () => {
  before(() => {
    browser.url('/');
  });
  it('Should have Conduit displayed in the view port', () => {
    expect(HomePage.txtConduit.waitForDisplayed('Login link is not displayed'));
  });
});
