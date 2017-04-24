(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MainMenuAppController', MainMenuAppController);

    MainMenuAppController.$inject = ['items'];
    function MainMenuAppController(items) {
        var mainList = this;
        mainList.items = items;
    };
 })();