'use strict';

const knowledgeDetailPage = function (){

    const po = this;

    po.Author_Name = by.css('strong.article-author');
    po.Publication_Date = by.css('time');

    po.getAuthorName = async () => {
        return await browser.element(po.Author_Name).getText();
    };

    po.getPublicationYear = async () => {
         return await browser.element(po.Publication_Date).getText();
    };

};

module.exports = new knowledgeDetailPage();