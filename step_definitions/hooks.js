"use strict";
const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({After}) {

    After(function () {
        return browser.executeScript('window.localStorage.clear();')
            .then(() => browser.manage().deleteAllCookies());
    });
});
