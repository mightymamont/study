module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    // frameworks: [
    //   // 'mocha',
    //   // 'chai-sinon'
    // ],
    reporters: ['progress', 'dots', 'coverage'],
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],
    singleRun: true,
    autoWatch: false,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        {
          type: 'text',
          // type: 'lcov',
          // subdir: '.'
        },
        {type: 'text-summary'}
      ]
    },

    preprocessors: {
      '*.js': ['coverage']
    },

    files: [
      'lib/angular.min.js',
      'lib/angular-mocks.js',

      '*.js',

      'tests/*.js'
    ],

    // autoWatch: true,
    // runOnce: false
  })
}