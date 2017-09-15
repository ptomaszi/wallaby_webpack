var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack');
var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
  return {
    files: [
      "src/*.js"
    ],
    tests: [
      "test/*JasmineSpec.js"
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