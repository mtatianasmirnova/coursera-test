
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');

 //Define states
  $stateProvider

  //home
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })



//categories main list
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'templates/main-menuapp.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {

      items: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getAllCategories().then(function (response) {
           return response.data;

        })
      }]
    }
  })



//details list
    .state('itemDetail', {
      url: '/itemDetail/{itemId}',
      templateUrl: 'templates/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        
              item: ['$stateParams','MenuAppService',
                  function ( $stateParams,MenuAppService) {
                  return MenuAppService.getMenuForCategory()
                       .then(function (items) {
                               return items.data[$stateParams.itemId];
                           }
                   );

              }

              ]}
      });
}

})();