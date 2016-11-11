(function(){
    var app = angular.module('appName.errors');

app.controller( 'ErrorController', function ($scope, $stateParams) {
    $scope.code = $stateParams.code;

    switch ($scope.code) {
        case "403" :
        { $scope.message = "literal.UnauthorizedPage";}
            break;
        case "404" :
            {$scope.message = "literal.NotFoundPage";}
            break;
        default:
            {$scope.code = 500;
            $scope.message = "literarl.UnexpectedError";}
    }
    });
})();
