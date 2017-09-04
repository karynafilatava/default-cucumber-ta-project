'use strict';
const BasePage = require('./Basepage.po');

class HomePage extends BasePage {
    constructor() {
        super();

        this.downloadButton = $('a.download');
        this.joinButton = element(by.partialLinkText('Join'));
        this.logInButton = element(by.partialLinkText('Log in'));
        this.joinEmailButton = $('input[value="Join with email"]');
        this.logInEmailButton = $('input[value="Log in with email"]');

        this.joinForm = $('form#join_form');
        this.firstLastNameJoinInput = this.joinForm.$('input#signup_name');
        this.emailJoinInput = this.joinForm.$('input#signup_email');
        this.passwordJoinInput = this.joinForm.$('input#signup_password');

        this.logInForm = $('form#login_form');
        this.emailLoginInput = this.logInForm.$('input#signup_email');
        this.passwordLoginInput = this.logInForm.$('input#login_password');

        // const prefix = Math.floor((Math.random() * 10000) + 1);
        const emailPrefix = 5859;
        this.data = {
            'firstLastNameInput': 'John Smith',
            'emailInput': emailPrefix + 'test@gmail.com',
            'passwordInput': '1234qwer'
        };

        this.pageIndicator = $('.topnav_desktop_logo');
        this.loggedIndicator = $('#topnav_menu_avatar');
    }

    fillInput(input, form) {
        return this[input + form + 'Input'].sendKeys(this.data[input + 'Input']);
    }
}
module.exports = HomePage;
