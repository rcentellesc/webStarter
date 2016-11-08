(function(){
    var app = angular.module( 'appName.about');

app.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'logic/about/templates/about.tpl.html',
        controllerAs:'about'
      }
    },
    data:{ pageTitle: "Acerca de" }
  });
});
})();
