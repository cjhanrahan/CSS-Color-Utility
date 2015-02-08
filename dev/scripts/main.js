requirejs.config({
  baseUrl: 'scripts',

  paths: {
    'jasmine': '../lib/jasmine-2.1.3/jasmine',
    'jasmine-html': '../lib/jasmine-2.1.3/jasmine-html',
    'custom-boot': '../lib/jasmine-2.1.3/custom-boot',
    'tests': '../tests'
  },

  shim: {
    'jasmine': {
      exports: 'window.jasmineRequire',
    },
      'jasmine-html': {
      'deps': ['jasmine'],
      'exports': 'window.jasmineRequire'
    },
    'custom-boot': {
      'deps': ['jasmine', 'jasmine-html'],
      'exports': 'window.jasmineRequire'
    }
  }
});



var testSuites = [
  'tests/cssPropertySuite',
  'tests/convertSuite',
  'tests/colorStateSuite'
];


require(['custom-boot', 'app'], function (boot, app) {
  require(testSuites, function () {
    window.runTests();
  });
});