'use strict';
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, When, Then}) => {

    Then(/^I should see '([^']*)' form$/, function (form) {
        return this.pageFactory.currentPage.waitForVisible(form + 'Form').should.be.fulfilled;
    });

    Then(/^I should see valid '([^']*)' info$/, function (field) {
        return this.pageFactory.currentPage.validateField(field).should.to.eventually.be.true;
    });

    Then(/^I should be '([^']*)'$/, function (status) {
        return this.pageFactory.currentPage.waitForVisible(status + 'Indicator').should.be.fulfilled;
    });

    Then(/^I should be on '([^']*)' page$/, function (page) {
        return this.pageFactory.getPage(page).waitForVisible('pageIndicator').should.be.fulfilled;
    });
});