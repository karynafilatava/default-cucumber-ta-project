'use strict';

const {defineSupportCode} = require('cucumber');

const Page = require('../support/po/homepage.po');
const page = new Page();

defineSupportCode(({Given, When, Then}) => {

    Given(/I navigate to the homepage/, () => {
        return page.visit();
    });
});
