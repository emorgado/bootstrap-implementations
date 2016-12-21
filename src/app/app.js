(function(angular) {

    'use strict';

    angular.module("testesAngular", [
        'ngRoute',
        'ngMessages',
        'home'
    ])
    .config(mainConfig);

    angular.element(function() {
        angular.bootstrap(document, ['testesAngular']);
    });

    /* @ngInject */
    function mainConfig($locationProvider, $routeProvider, $httpProvider, $logProvider) {
        $logProvider.debugEnabled(false);
        // $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }

})(angular);