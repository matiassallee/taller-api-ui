const Page = require('../base.page');

const NewArticlePage = Object.create(Page, {
  /**
   * define elements
   */
  txtBoxArticleTitle: { get() { return $('[placeholder="Article Title"]'); } },
  txtBoxWhatsArticleAbout: { get() { return $('//input[contains(@placeholder,"What")]'); } },
  txtBoxWriteYourArticle: { get() { return $('[placeholder="Write your article (in markdown)"]'); } },
  txtBoxEnterTags: { get() { return $('[placeholder="Enter tags"]'); } },
  btnPublishArticle: { get() { return $('//button[normalize-space(text())="Publish Article"]'); } },
  /**
   * define or overwrite page methods
   */
});

module.exports = NewArticlePage;