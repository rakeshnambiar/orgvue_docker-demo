'use strict';

const
    knowledgeDetailPage = require('../pages/knowledge.detail.page');

const knowledgeBasePage = function () {

    const po = this;

    po.Search_Field = by.id('query');
    po.Search_Results = by.css('li.search-result');
    po.All_Links = by.css('li.search-result a');

    po.PerformSearch = async (input) => {
        await browser.element(po.Search_Field).sendKeys(input);
        await browser.element(po.Search_Field).sendKeys(protractor.Key.ENTER);
    };

    po.isMultipleResultsAvailable = async () => {
        let results = await browser.element.all(po.Search_Results);
        if (results.length > 1) {
            console.log('Number of Results available - ' + results.length);
            return true;
        } else {
            return false;
        }
    };

    po.SelectFirstResultItem = async () => {
      try{
          let allLinks = await browser.element.all(po.All_Links);
          await allLinks[0].click();
          return knowledgeDetailPage;
      }  catch (e) {
          console.log('Error: While selecting the first result item');
      }
    };
};

module.exports = new knowledgeBasePage();
