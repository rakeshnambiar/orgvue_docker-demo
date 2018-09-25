'use strict';

const
    landingPage = require('../pages/landing.page'),
    assert = require('../utils/assert').assert,
    expect = require('../utils/expect').expect;

let
    requestDemoPage = "",
    contactPage = "",
    knowledgePage = "",
    knowledgeDetailsPage = "";

module.exports = function requestDemo() {
    this.setDefaultTimeout(60 * 1000);

    this.Given(/^I am customer of VueOrg$/, async () => {
        console.log("-------New User is going to access the OrgVue Application ----------------")
        await landingPage.openApp();
    });

    this.When(/^I navigate to the VueOrg home page$/, async () => {
        assert.isTrue(await landingPage.isLandingPageDisplayed(),'Validation Error: Landing Page NOT available');
    });

    this.When(/^Click on 'GET A DEMO' button on the top right of the page$/, async () => {
        requestDemoPage = await landingPage.RequestDemo();
    });

    this.Then(/^System should display the popup page to request the demo$/, async () => {
        assert.isTrue(await requestDemoPage.isRequestDemoPageDisplayed(),'Validation Error: Get A Demo form NOT available');
    });

    this.When(/^I fill fill all the available fields on the page as below$/, async (table) => {
        await requestDemoPage.fillRequestDemoForm(table);
    });

    this.Then(/^System should populates the user entered values$/, async () => {
        assert.isTrue(await requestDemoPage.verifyFormFilled(),'Error: Get A Demo form is NOT filled as expected');
    });

    //TC_02
    this.When(/^Clicks on 'CONTACT' button from the top menu$/, async () => {
        contactPage = await landingPage.GotoContactPage();
    });

    this.When(/^Clicks on 'VISIT KNOWLDGE BASE' option from Contact page$/, async () => {
         knowledgePage = await contactPage.GotoKnowledgeBasePage();
    });

    this.When(/^Search with the keywork "([^"]*)"$/, function (keyword) {
        knowledgePage.PerformSearch(keyword);
    });

    this.Then(/^I should see multiple results on the screen$/, async () => {
        assert.isTrue(await knowledgePage.isMultipleResultsAvailable(),'Error: Multiple results are NOT available');
    });

    this.When(/^I choose the first item from the results page$/, async () => {
        knowledgeDetailsPage = await knowledgePage.SelectFirstResultItem();
    });

    this.Then(/^I should see the below information on the detail page$/, async (table) => {
        let author = table.raw().map(row => row[0])[0];
        let publicationYear = table.raw().map(row => row[1])[0];
        expect(await knowledgeDetailsPage.getAuthorName()).to.equal(author);
        expect(await knowledgeDetailsPage.getPublicationYear()).to.contains(publicationYear);
    });

};