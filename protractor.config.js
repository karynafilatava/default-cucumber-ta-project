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
    seleniumServer: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        global.TIMEOUT = 30000;

        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.should = chai.should;
        global.ec = protractor.ExpectedConditions;
    }
};