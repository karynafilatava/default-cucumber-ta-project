'use strict';
const {defineSupportCode} = require('cucumber');
const visible = require('../support/visibility');

defineSupportCode(({Given, When, Then}) => {

    Then(/^'(.*)' should be visible$/, (elem) => {
        return visible.checkVisible(elem).should.to.eventually.be.true;
    });

    When(/^I scroll down '(.*)' time\(s\)$/, (time) => {
        let counter = 200 * time;
        return browser.executeScript('window.scrollBy(0,' + counter + ')');
    });

    Then(/^'(.*)' should be invisible$/, (elem) => {
        return visible.checkVisible(elem).should.to.eventually.be.false;
    });

    When(/^I scroll up$/, () => {
        return browser.executeScript('window.scrollTo(0,0)');
    });
});