'use strict';
exports.config = {
    seleniumServer: 'http://localhost:4444/wd/hub',
    specs: './features/*.feature',
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: ['./step_definitions/*.js', './support/world.js'],
        format: ['pretty']
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'https://vimeo.com/cameo',
    onPrepare: function () {
        global.TIMEOUT = 90000;
        global.ec = protractor.ExpectedConditions;

        const chai = require('chai');
        global.should = chai.should();
        chai.use(require('chai-as-promised'));
    }
};
