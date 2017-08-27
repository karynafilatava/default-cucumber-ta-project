'use strict';

class Page {
    constructor() {
        this.logo = $('.logo-promo');
    }

    visit() {
        browser.get('http://www.rw.by/');
        return browser.wait(ec.presenceOf(this.logo), TIMEOUT);
    }
}

module.exports = Page;