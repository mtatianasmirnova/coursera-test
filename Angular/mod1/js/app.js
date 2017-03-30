(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){


$scope.buttonLunchEvent = function(){


if ($scope.LunchInput==0) {

	$scope.myMessage = "Please enter data first";
}
 else{


var comma = ",";
var myArray = $scope.LunchInput.split(comma);
var length = myArray.length;		

	if (length<=3) {
 	$scope.myMessage = "Enjoy!";

 }
  	else {

  $scope.myMessage = "Too much!";
  }

}
};

}
  

})();

