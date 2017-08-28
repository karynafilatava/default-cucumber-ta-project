'use strict';
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {

    Given(/^I am on the '([^']*)' page$/, function (page) {
        return this.pageFactory.getPage(page).visit()
            .then(() => this.pageFactory.currentPage.waitForVisible('pageIndicator'));
    });

    When(/^I click '([^']*)' button$/, function (button) {
        let buttonName = button + 'Button';
        return this.pageFactory.currentPage.waitForVisible(buttonName)
            .then(() => this.pageFactory.currentPage[buttonName].click());
    });

    When(/^I enter '([^']*)' to '([^']*)' form input$/, function (input, form) {
        return this.pageFactory.currentPage.waitForVisible(input + form + 'Input')
            .then(() => this.pageFactory.currentPage.fillInput(input, form));
    });
});