(function(angular){
    'use strict';

    angular
        .module('home', [
            'ngRoute'
            ])
        .config(['$routeProvider', function($routeProvider) {


            $routeProvider.when('/', {
                templateUrl: 'app/home/view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            });

        }]);

})(angular);