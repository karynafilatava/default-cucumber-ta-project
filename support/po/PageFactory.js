"use strict";
const HomePage = require('./Homepage.po');
const ItunesPage = require('./Itunes.po');
const MembershipChoosing = require('./MembershipChoosing.po');

class PageFactory {
    constructor() {
        this.pages = {
            'itunes': ItunesPage,
            'home': HomePage,
            'membershipChoosing': MembershipChoosing
        };
        this.currentPage = undefined;
    }

    getPage(page) {
        if (!this.pages[page]) {
            throw new Error('Wrong page name: ' + page);
        }
        this.currentPage = new this.pages[page]();
        return this.currentPage;
    }
}
module.exports = PageFactory;