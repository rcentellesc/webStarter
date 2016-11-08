(function(){
    var app = angular.module('appName.home');

app.config(function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeController',
        templateUrl: 'logic/home/templates/home.tpl.html',
        controllerAs: 'home'
      }
    },
    data:{ pageTitle: "Inicio" }
  });
});
})();