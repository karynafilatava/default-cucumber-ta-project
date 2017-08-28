'use strict';
const BasePage = require('./Basepage.po');

class ItunesPage extends BasePage {
    constructor() {
        super();
        this.title = $('#title');
        this.infobox = $('#left-stack>.product>ul.list');
        this.updated = this.infobox.$('.release-date>*[itemprop="datePublished"]');
        this.version = this.infobox.$('*[itemprop="softwareVersion"]');
        this.size = this.infobox.element(by.cssContainingText('li', 'Size'));
        this.pageIndicator = $('.localnav');
        this.validData = {
            'title': 'Cameo',
            'updated': 'Sep 12, 2016',
            'version': '2.3.1',
            'size': '120 MB'
        };
    }

    validateField(field) {
        return this[field].getText()
            .then((text) => text.includes(this.validData[field]));
    }
}
module.exports = ItunesPage;