const Page = require('../base.page');

const HomePage = Object.create(Page, {
  /**
   * define elements
   */
  txtConduit: { get() { return $('//h1[normalize-space(text())="conduit"]'); } },
  /**
   * define or overwrite page methods
   */
});

module.exports = HomePage;