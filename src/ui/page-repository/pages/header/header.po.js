const Page = require('../base.page');

const HeaderPage = Object.create(Page, {
  /**
   * define elements
   */
  ttlConduit: { get() { return $('//nav//a[normalize-space(text())="conduit"]'); } },
  lnkHome: { get() { return $('//a[normalize-space(text())="Home"]'); } },
  lnkSignIn: { get() { return $('//a[@href="#/login"]'); } },
  lnkSignUp: { get() { return $('//a[@href="#/register"]'); } },
  lnkNewArticle: { get() { return $('//a[@href="#/editor"]'); } },
  lnkSettings: { get() { return $('//a[@href="#/settings"]'); } },
  lnkUserAccount: { get() { return $('//ul[@class="nav navbar-nav pull-xs-right"]//a[contains(@href,"#/@")]'); } },
  
  /**
   * define or overwrite page methods
   */
});

module.exports = HeaderPage;