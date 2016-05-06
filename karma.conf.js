module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '.',

        singleRun: false,

        plugins: [
            'karma-jasmine',
            'karma-jspm',
            'karma-chrome-launcher'
        ],
        frameworks: ['jspm', 'jasmine'],
        files: [
            { pattern: '/base/config.js', included: true, watched: true },
            { pattern: '/base/src/*.ts', included: true, watched: true }
        ],
        jspm: {
            loadFiles: [
                'src/app/test.ts',
                'src/app/**/*.spec.ts'
            ],
            serveFiles: [
                'src/bundle.js',
                'src/app/**/*!(*.spec).ts',
                'tsconfig.json'
            ]
        },

        proxies: {
            '/app': '/base/src/app',
            '/jspm_packages': '/base/jspm_packages',
            '/tsconfig.json': '/base/tsconfig.json'
        },

        reporters: ['progress'],

        browsers: ['Chrome'],
    });
};