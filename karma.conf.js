var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            'tests.webpack.js'
        ],

        preprocessors: {
        // add webpack as preprocessor
            'tests.webpack.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader'
        ],

        reporters: ['progress', 'junit', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'], //run in chrome
    });
};
