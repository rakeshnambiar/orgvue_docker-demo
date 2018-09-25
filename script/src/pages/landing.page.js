'use strict';
const
    requestDemoPage = require('../pages/request.demo.page'),
    contactPage = require('../pages/contact.page');

const landingPage = function (){

    const po = this;

    po.Get_A_Demo = by.css('a[href^="/request-demo"]');
    po.Contact_Menu = by.css('a[href^="/contact"]');
    po.Highlighted_Text = by.css('p.bigger.highlight');
    po.Accept_Privacy = by.id('hs-eu-confirmation-button');



    po.openApp = async () => {
        browser.waitForAngularEnabled(false);
        await browser.get('/');
        //await browser.manage().window().maximize(); //Not applicable for selenium-grid execution
        if(await browser.element(po.Accept_Privacy)){
            await browser.element(po.Accept_Privacy).click();
        }
    };

    po.isLandingPageDisplayed = async () => {
      return await browser.element(po.Highlighted_Text).isPresent();
    };

    po.RequestDemo = async () => {
        try {
            await browser.element(po.Get_A_Demo).click();
            browser.driver.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
            return requestDemoPage;
        }catch (e) {
            console.log('Exception while clicks on Get A Demo button : ' + e.toString());
        }
    };

    po.GotoContactPage = async () => {
        await browser.element(po.Contact_Menu).click();
        return contactPage;
    };
};

module.exports = new landingPage();
