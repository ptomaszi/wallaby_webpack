var wallabyWebpack = require('wallaby-webpack');

var webpackConfig = require('./webpack');
delete webpackConfig.entry;
webpackConfig.resolve.extensions = ['.js'];

var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
  return {
    files: [
      {pattern: "src/*.js", load: false}
    ],
    tests: [
      {pattern: "test/*JasmineSpec.js", load: false}
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
