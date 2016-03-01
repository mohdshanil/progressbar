var tests = [];
for (var file in window.__karma__.files) {
  if (/Spec\.js$/.test(file)) {
    tests.push(file);
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/src',

  paths: {
    'jqueryui': 'lib/jquery-ui/jquery-ui',
    'materialize': 'lib/Materialize/dist/js/materialize',
    'hammerjs': 'lib/Materialize/js/hammer.min',
  },
  map: {
    'jquery': 'lib/jquery/dist/jquery/jquery.js',
  },

  shim: {
    "jquery-ui": {
      deps: ['jquery']
    },
    "materialize": {
      deps: ['hammerjs']
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
