(function () {
'use strict';

angular.module('MenuApp')
.component('menuApp', {
  templateUrl: 'templates/menuapp.template.html',
  bindings: {
    items: '<'
  }
});

})();