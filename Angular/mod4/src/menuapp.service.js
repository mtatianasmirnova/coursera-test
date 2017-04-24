(function () {
    'use strict';

    angular.module('MenuApp')
        .service('MenuAppService', MenuAppService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuAppService.$inject = ['$http', 'ApiBasePath','$rootScope']
    function MenuAppService($http, ApiBasePath, $rootScope) {
        var service = this;


 // Returns a promise with the list of category
        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
            return response;

        };
        service.getMenuForCategory = function (shortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json"),
                params: {
                    categories: shortName
                }
            });

            return response;
        };


        service.$onInit = function () {
            var cancel = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams, options){
                    service.getAllCategories = true;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams){
                    service.getAllCategories = false;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error){
                    service.getAllCategories = true;
                });
            cancellers.push(cancel);
        };


    }
})();