exports.config = {

    framework: 'custom',

    // Selenium grid
      directConnect: false,
      seleniumAddress: 'http://selenium-hub:4444/wd/hub',

    // To get the awesome Serenity BDD reports, replace this entry:
    // frameworkPath: require.resolve('protractor-cucumber-framework'),

    // with this one:
    frameworkPath: require.resolve('serenity-js'),

    // Yes, that's all you need :-)

    // -----------------------------------------------------------------------------------------------------------------

    baseUrl: 'https://www.orgvue.com',

    allScriptsTimeout: 110000,

    specs: [ 'src/features/**/*.feature' ],
    cucumberOpts: {
        require:    [ 'src/**/*.js' ],
        format:     'pretty',
        tags:       ['~@ignore', '@RegressionTest']
    },

    multiCapabilities:  [{
    //     browserName: 'firefox'
    // }, {
        browserName: 'chrome'
    }],

        // execute tests using 2 browsers running in parallel
        shardTestFiles: true,
        maxInstances: 1,


    restartBrowserBetweenTests: true
};
