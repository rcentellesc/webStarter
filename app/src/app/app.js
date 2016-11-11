(function(){
    var app=angular.module( 'appName', [
        'templates-app',
        'templates-common',
        'appName.about',
        'appName.home',
        'appName.services',
        'appName.config',
        'appName.directives',
		'appName.errors',
        'ui.router',
        'ui.bootstrap',
        'common.services',
        'common.directives',
        'http-auth-interceptor'
    ]);

    app.filter("dateFilter", function ($filter) {
        return function (item,format) {
           return (item) ? $filter('date')(parseInt(item,10),format, "+0000"):'';
        };
    });

    app.config( function myAppConfig ( $locationProvider,$stateProvider, $urlRouterProvider,HateoasInterceptorProvider ) {
        $urlRouterProvider.when('','/home').otherwise('/error/404');
        HateoasInterceptorProvider.transformAllResponses();
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    });

    app.run( function run ($rootScope,$state,$transitions) {
            $rootScope.$state = $state;
            $transitions.onStart({},  function($transition$) {
                if ($transition$.to().redirectTo) {
                    $state.go($transition$.to().redirectTo);
                }
            });
    });

    //noinspection JSAnnotator
    app.controller( 'AppCtrl', function AppCtrl ($transitions) {
        var scope =this;
        
        // CAMBIAR EL TITULO
        $transitions.onEnter({}, function( $transition$) {
            if ( angular.isDefined( $transition$.to().data.pageTitle ) ) {
                scope.pageTitle = $transition$.to().data.pageTitle + ' | appName' ;
            }
        });
   
    });
})();


