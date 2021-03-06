'use strict';

module.exports = function(karma) {
  karma.set({
    frameworks: [ 'jasmine', 'browserify' ],

    files: [
      {pattern: 'spec/share/include.adoc', watched: false, included: false, served: true},
      {pattern: 'spec/share/sales.csv', watched: false, included: false, served: true},
      {pattern: 'build/css/asciidoctor.css', watched: false, included: false, served: true},
      'spec/commonJS/asciidoctor.spec.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'spec/commonJS/asciidoctor.spec.js': [ 'browserify' ]
    },

    browsers: [ 'PhantomJS' ],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,
    // force the port to use
    port: 9876,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ ]
    }
  });
};
