/*
 * The first JS file to be loaded. Takes care of setting up all of
 * the required paths for requireJs.
 *
 * Created by jlivingston on 3/4/17.
 */

// Configure RequireJS
// `main.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
  'use strict';

  // -- RequireJS config --
  requirejs.config({
    // Packages = top-level folders; loads a contained file named 'main.js"
    baseUrl: '/play/assets/javascripts', // relative to app
    config: {
      moment: {
        noGlobal: true
      }
    },
    paths: {
      // specify a path to jquery, the second declaration is the local fallback
      jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        'lib/jquery-1.10.2.min'],
      bootstrap: ['https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min',
        'lib/bootstrap.min'],
      bootstrapSlider: 'lib/bootstrap-slider',
      fileupload: 'lib/jquery.fileupload',
      iframetransport: 'lib/jquery.iframe-transport',
      'jquery.form': 'lib/jquery.form.min',
      'jquery.ui.widget': 'lib/jquery.ui.widget',
      jvb2wrk: 'https://use.typekit.net/jvb2wrk',
      mask: 'lib/jquery.mask',
      moment: 'lib/moment.min',
      strongPass: 'lib/strongPass',
      typeahead: 'lib/typeahead.min',
      autoNumeric: 'lib/autoNumeric',
      chosen: 'lib/chosen.jquery.min',
      jqueryui: 'lib/jquery-ui.min',
      cookie: 'lib/jquery.cookie.min',
      clipboard: 'lib/clipboard.min',
      d3: 'lib/d3.min',
      c3: 'lib/c3.min',
      fingerprint2: 'lib/fingerprint2.min',
      spin: 'lib/spin.min'
    },
    shim: {
      'bootstrap': ['jquery'],
      'bootstrapSlider': ['jquery'],
      'mask': ['jquery'],
      'typeahead': ['jquery', 'bootstrap'],
      'autoNumeric': ['jquery'],
      'cookie': ['jquery'],
      'clipboard': ['jquery'],
      'c3': ['d3']
    }
  });

  requirejs.onError = function (err) {
    console.log(err);
  };

  // Load the app. This is kept minimal so it doesn't need much updating.
  require(['jquery', 'bootstrap']);
})(requirejs);
