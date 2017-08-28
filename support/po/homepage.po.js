'use strict';

class HomePage {
    constructor() {
        const randomPrefix = 666;
        // const randomPrefix = Math.floor((Math.random() * 1000) + 1);
        this.logo = $('.topnav_desktop_logo');
        this.joinButton = element(by.partialLinkText('Join'));
        this.logInButton = element(by.partialLinkText('Log in'));
        // this.joinButton = $('li[data-menu-id="join"]>a');
        // this.logInButton = $('li[data-menu-id="login"]>a');
        this.joinEmailButton = $('input[value="Join with email"]');
        this.logInEmailButton = $('input[value="Log in with email"]');

        this.joinForm = $('form#join_form');
        this.firstLastNameJoinInput = this.joinForm.$('input#signup_name');
        this.emailJoinInput = this.joinForm.$('input#signup_email');
        this.passwordJoinInput = this.joinForm.$('input#signup_password');

        this.logInForm = $('form#login_form');
        this.emailLoginInput = this.logInForm.$('input#signup_email');
        this.passwordLoginInput = this.logInForm.$('input#login_password');

        this.data = {
            'firstLastNameInput': 'John Smith',
            'emailInput': randomPrefix + 'test@gmail.com',
            'passwordInput': '1234qwer'
        };
        this.signUpIndicator = $('#compare_grid');
        this.loggedIndicator = $('#topnav_menu_avatar');
    }

    visit() {
        browser.get(browser.baseUrl);
        return browser.wait(ec.presenceOf(this.logo), TIMEOUT);
    }

    waitForVisible(elementName) {
        return browser.wait(ec.visibilityOf(this[elementName]), TIMEOUT);
    }

    enterInput(input, form) {
        return this.waitForVisible(input+form+'Input').then(() => this[input+form+'Input'].sendKeys(this.data[input+'Input']));
    }

}

module.exports = HomePage;
