module.exports = function(config) {  
config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    //basePath: dirPath,//'',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // изображения
        // доступны по пути base/build/img/*.png
        //{pattern: 'build/img/*.png', watched: false, included: false, served: true, nocache: false},
        // библиотеки
        //'libs/angular/angular.js',
        //'libs/angular-mocks/angular-mocks.js',
        //'build/js/main.js', // файл с собранным приложением
		{pattern: 'main.js', watched: true, included: true, served: true},
		// файл старта
		//{pattern: 'index.html', watched: true, included: true, served: true},
         // тесты
         {pattern: 'test*.js', watched: true, included: true, served: true},
    ],

    // прокси 
    // proxies: {
    //     '/img/':'/base/build/img/'
    // },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'main.js': 'coverage'
    },
        
    coverageReporter: {
        type: 'text',
        // type: 'html',
        dir: 'tests/coverage'
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    //autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 5 //Infinity
  })};