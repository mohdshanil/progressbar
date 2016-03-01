requirejs.config({
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'jqueryui': 'lib/jquery-ui/jquery-ui',
    'materialize': 'lib/Materialize/dist/js/materialize',
    'ProgressBarComponent': 'app/components/progressBar/progressBarComponent',
    'hammerjs': 'lib/Materialize/js/hammer.min',
    'app': 'app'
  },

  shim: {
    "jquery-ui": {
      exports: "$",
      deps: ['jquery']
    },
    "materialize": {
      deps: ['hammerjs']
    }
  }
});
requirejs(["jquery", "app"], function(jquery, app) {
  app.initialize();
});
