'use strict';

const
    knowledgeBasePage = require('../pages/knowledge.base.page');

const contactPage = function () {

    const po = this;

    po.button_knowledge_base = by.css('div.button a');

    po.GotoKnowledgeBasePage = async () => {
        await browser.element(po.button_knowledge_base).click();
        return knowledgeBasePage;
    };


};

module.exports = new contactPage();