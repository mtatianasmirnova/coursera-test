(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var Controller1 = this;

Controller1.toBuyArray = ShoppingListCheckOffService.getItems();

Controller1.removeItemFromToBuy=function(itemIndex){
	ShoppingListCheckOffService.removeItemFromToBuy(itemIndex);
	//console.log("Array is " + Controller1.toBuyArray);
}

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var Controller2 = this;

  Controller2.boughtArray=ShoppingListCheckOffService.getItemsBought();
  
}


 function ShoppingListCheckOffService() {
  var service = this;

  var toBuyArray=[
  {
  	name: "Milk",
  	quantity: "1 bottle"
  },

   {
  	name: "Carrots",
  	quantity: "1 kg"
  },

   {
  	name: "Apples",
  	quantity: "1 kg"
  },

   {
  	name: "Oranges",
  	quantity: "2 kg"
  },

  {
  	name: "Avocado",
  	quantity: "3 fruits"
  }
  ];

  var boughtArray=[];


  service.removeItemFromToBuy = function (itemIndex) {
   
    var item = {
      name: toBuyArray[itemIndex].name,
      quantity: toBuyArray[itemIndex].quantity
    };
    boughtArray.push(item);
    toBuyArray.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return toBuyArray;

  };

  service.getItemsBought = function () {
    return boughtArray;
  };


  
} 

})();

