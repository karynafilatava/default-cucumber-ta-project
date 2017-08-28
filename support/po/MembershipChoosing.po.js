'use strict';
const BasePage = require('./Basepage.po');

class MembershipChoosing extends BasePage {
    constructor() {
        super();
        this.pageIndicator = $('#compare_grid');
    }
}
module.exports = MembershipChoosing;