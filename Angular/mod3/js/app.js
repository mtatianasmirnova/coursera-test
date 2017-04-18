(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems(){
 
    var ddo = {
        templateUrl: 'foundItems.html',
        scope:{ 
            onRemove: '&',
            found: '<'
            
        },
        controller: FoundItemsDirectiveController, 
        controllerAs: 'list',
        bindToController: true
    };
    return ddo;

}

function FoundItemsDirectiveController(){
    var list = this;
    list.found = [];
    list.message = "Nothing was found";
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var searchController = this;
    searchController.refresh = function(){
        MenuSearchService.getMatchedMenuItems(searchController.searchTerm)
        .then(function(results){
            
            searchController.found = results.foundItems;
          
            if (results.foundItems.length === 0){
                searchController.message = 'Nothing was found';
            }else{
                searchController.message = "";
            }
        });
    }
    searchController.removeItem = function(index){
        searchController.found.splice(index,1);
    }
}  


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems= function (searchTerm) {
    console.log("Search term is " + searchTerm);

    
    return $http({ 
        method: 'GET', 
        url: (ApiBasePath + '/menu_items.json')
        })
      .then(function(response){
          var all = response.data;
    
          var found = [];

          for (var i=0;i<all.menu_items.length;i++){
              var item = all.menu_items[i];
              if (searchTerm != null && searchTerm != "" && item.description.toLowerCase().indexOf(searchTerm)!==-1){
                found.push(item);
                }
          }
          return {foundItems: found};
       })
      .catch(function(error){
          return {foundItems: []};
      });
   } 
} 

})();
