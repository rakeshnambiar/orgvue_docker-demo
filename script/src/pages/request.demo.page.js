'use strict';

const requestDemoPage = function () {

    const po = this;

    po.Request_Demo_Form = by.css('div.webform');
    po.Input_Fields = by.css('div.input');


    po.isRequestDemoPageDisplayed = async () => {
        await browser.driver.sleep(1000);
        return await browser.element(po.Request_Demo_Form).isPresent();
    };

    po.fillRequestDemoForm = async (table) => {
        try {
            await browser.element.all(po.Input_Fields).then(async (fields) => {
                let i = 0;
                while (i < fields.length - 1) {
                    await fields[i].click();
                    await browser.actions().sendKeys(table.raw().map(row => row[i])[0]).perform()
                    ++i;
                }
            });
        } catch (e) {
            console.log('Error: While filling the Request Demo form');
        }
    };

    po.verifyFormFilled = async () => {
        let filled = true;
        await browser.element.all(po.Input_Fields).then(async (fields) => {
            let i = 0;
            while (i < fields.length - 1) {
                if(fields[i].getText().length === 0){
                    filled = false;
                    break;
                }
                ++i;
            }
        });
        return filled;
    };
};

module.exports = new requestDemoPage();