'use strict';

const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {

    Given(/^I am on the '([^']*)'$/, function(page) {
        return this[page].visit();
    });

    When(/^I click '([^']*)' button$/, function (button) {
        return browser.wait(ec.visibilityOf(this.homepage[button+'Button']), TIMEOUT)
            .then(() => this.homepage[button+'Button'].click());
    });

    Then(/^I should see '([^']*)' form$/, function (form) {
        return this.homepage.waitForVisible(form+'Form').should.be.fulfilled;
    });

    When(/^I enter '([^']*)' to '([^']*)' form input$/, function (input, form) {
        return this.homepage.enterInput(input, form);
    });

    Then(/^I should be on '([^']*)' page$/, function (page) {
        return this.homepage.waitForVisible(page+'Indicator').should.be.fulfilled;
    });

    Then(/^I should be '([^']*)'$/, function (status) {
        return this.homepage.waitForVisible(status+'Indicator').should.be.fulfilled;
    });
});
