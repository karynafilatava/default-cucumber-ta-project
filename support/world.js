"use strict";
const {defineSupportCode} = require('cucumber');

function CustomWorld() {
}

defineSupportCode(function ({setWorldConstructor, setDefaultTimeout}) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(TIMEOUT);

    browser.ignoreSynchronization = true;
    return browser.manage().window().maximize();
});