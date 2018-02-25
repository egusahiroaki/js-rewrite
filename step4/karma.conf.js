// Karma configuration
// Generated on Mon Feb 26 2018 00:04:36 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'specContext.js', watched: false},
    ],
    preprocessors: {
      'specContext.js': ['webpack'],
    },
    webpack: {
      module: {
        loaders: [
          {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
        ],
      },
      watch: true,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
