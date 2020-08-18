const { expect } = require('chai');

const DataWrapper = require('../../wrappers/data.wrapper');
const HeaderPage = require('../../page-repository/pages/header/header.po');
const SignInPage = require('../../page-repository/pages/sign-in/sign-in.po');

describe('Sign In - Perform Sign In with a valid user', () => {
  const adminUser = DataWrapper.getAdminUser();
  before(() => {
    browser.url('/');
  });
  it('Should navigate to Sign In page', () => {
    expect(HeaderPage.lnkSignIn.waitForDisplayed('Sign In link is not displayed'));
    HeaderPage.lnkSignIn.click();
  });
  it('Should type the user email', () => {
    expect(SignInPage.txtBoxEmail.waitForDisplayed('Email text box is not displayed'));
    SignInPage.txtBoxEmail.setValue(adminUser.user);
  });
  it('Should type the user password', () => {
    expect(SignInPage.txtBoxPassword.waitForDisplayed('Password text box is not displayed'));
    SignInPage.txtBoxPassword.setValue(adminUser.password);
  });
  it('Should click on "Sign In" button', () => {
    expect(SignInPage.btnSignIn.waitForDisplayed('Sign In button is not displayed'));
    SignInPage.btnSignIn.click();
  });
  it('Should be logged in', () => {
    expect(HeaderPage.lnkUserAccount.waitForDisplayed('User was not successfully logged in'));
  });
});
