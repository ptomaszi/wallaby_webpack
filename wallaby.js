var wallabyWebpack = require('wallaby-webpack');

var webpackConfig = require('./webpack');
delete webpackConfig.entry;
webpackConfig.resolve.extensions = ['.js','.ts'];

var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: "src/*.js", load: false },
      { pattern: "src/*.ts", load: false },
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/reflect-metadata/Reflect.js'
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
