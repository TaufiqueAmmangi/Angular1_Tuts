var ngApp = angular.module('myApp', []);

        ngApp.controller('demo1', function ($scope,$window) {
            $scope.message = "Hello World!";    
             $scope.DisplayMessage = function (value) {
                $window.alert(value)
            }    

            // Filters
             $scope.person = { firstName: 'James', lastName: 'Bond', salary: 100000}
        });


        ngApp.controller('parentController', function ($scope, $rootScope) {
            $scope.controllerName = "parentController";
            $rootScope.message = "Hello World!";
        });
         ngApp.controller('childController', function ($scope) {
            $scope.controllerName = "childController";
        });

        ngApp.controller('siblingController', function ($scope) {

        });