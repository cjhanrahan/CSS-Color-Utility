requirejs.config({
  baseUrl: 'scripts'
});

requirejs(['app'], function(app){
  app.start();
});