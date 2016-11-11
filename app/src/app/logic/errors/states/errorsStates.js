(function(){
    var app = angular.module( 'appName.errors');

app.config(function config( $stateProvider ) {
  $stateProvider.state( 'error', {
    url: '/error/:code',
    views: {
      "main": {
        controller: 'ErrorController',
        templateUrl: 'logic/errors/templates/errors.tpl.html',
        controllerAs:'error'
      }
    },
    data:{ pageTitle: "Error" }
  });
});
})();
