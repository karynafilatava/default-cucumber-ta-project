'use strict';

exports.config = {
    specs: './features/*.feature',
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: ['./step_definitions/*.js', './support/*.js'],
        tags: [''],
        format: ['pretty']
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'https://vimeo.com/cameo',
    seleniumServer: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        global.TIMEOUT = 90000;

        const chai = require('chai');
        global.should = chai.should();
        chai.use(require('chai-as-promised'));

        global.ec = protractor.ExpectedConditions;
    }
};
