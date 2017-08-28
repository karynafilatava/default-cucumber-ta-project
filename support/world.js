"use strict";
const {defineSupportCode} = require('cucumber');
const HomePage = require('./po/homepage.po');

function CustomWorld() {
    this.homepage = new HomePage();
}

defineSupportCode(function ({setWorldConstructor, setDefaultTimeout}) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(TIMEOUT);

    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();
});
