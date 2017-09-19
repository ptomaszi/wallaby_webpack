var wallabyWebpack = require('wallaby-webpack');

var webpackConfig = require('./webpack');
delete webpackConfig.entry;
webpackConfig.resolve.extensions = ['.js','.ts'];

webpackConfig.module.rules.push({test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/});
webpackConfig.module.rules.push({test: /\.html$/, loader: 'html-loader'});

var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: "src/*.+(js|ts|html)", load: false },
      { pattern: "node_modules/angular/angular.js", instrument: false },
      { pattern: "node_modules/angular-mocks/angular-mocks.js", instrument: false },
      { pattern: "node_modules/reflect-metadata/Reflect.js", instrument: false },
    ],
    tests: [
      { pattern: "test/*JasmineSpec.js", load: false },
      { pattern: "test/*spec.ts", load: false }
    ],
    testFramework: "jasmine",
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    postprocessor: wallabyPostprocessor,
    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
