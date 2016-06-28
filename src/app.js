exports.app = angular.module('app', [
    'ngRoute',
]);

exports.app.config(['$routeProvider', '$compileProvider',
    function ($routeProvider, $compileProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'pageHome', 
        });
        
        $compileProvider.debugInfoEnabled(false);
    }
]);