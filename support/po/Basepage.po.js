'use strict';
class BasePage {
    constructor() {
    }

    visit() {
        let url = this.url || browser.baseUrl;
        return browser.get(url);
    }

    waitForVisible(elementName) {
        return browser.wait(ec.visibilityOf(this[elementName]), TIMEOUT);
    }
}
module.exports = BasePage;