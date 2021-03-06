// Karma configuration
// Generated on Sat Apr 08 2017 23:03:49 GMT-0600 (MDT)

module.exports = function (config) {
  var configuration = {
    basePath: '',
    frameworks: ['jasmine', "karma-typescript"],
    files: [
      'src/**/*.ts',
      'spec/**/*.ts',
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },
    reporters: ['progress', "karma-typescript"],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.spec.json",
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  };
  config.set(configuration);
}
