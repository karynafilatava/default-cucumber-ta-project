"use strict";
const {defineSupportCode} = require('cucumber');
const PageFactory = require('./po/pageFactory');

function CustomWorld() {
    this.pageFactory = new PageFactory();
}

defineSupportCode(function ({setWorldConstructor, setDefaultTimeout}) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(TIMEOUT);

    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();
});
