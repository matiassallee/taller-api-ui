const Page = require('../base.page');

const SignInPage = Object.create(Page, {
  /**
   * define elements
   */
  ttlSignIn: { get() { return $('//h1[text()="Sign in"]'); } },
  lnkNeedAnAccount: { get() { return $('//p//a[@href="#/register"]'); } },
  txtBoxEmail: { get() { return $('[placeholder=Email]'); } },
  txtBoxPassword: { get() { return $('[placeholder=Password]'); } },
  btnSignIn: { get() { return $('//button[normalize-space(text())="Sign in"]'); } },
  /**
   * define or overwrite page methods
   */
});

module.exports = SignInPage;