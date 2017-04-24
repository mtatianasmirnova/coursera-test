(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);

   


ItemDetailController.$inject = ['item'];
    function ItemDetailController(item) {
        var itemDetail = this;
        itemDetail.name = item.name;
        //itemDetail.shortName = item.short_name;
        itemDetail.specialInstructions = item.special_instructions;
        

    }









})();