(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  $scope.lunch_menu = "";
  $scope.fontcolor = {};

  $scope.check_count = function () {
  	
  	if($scope.lunch_menu=="") //handles when textbox is empty or containing spaces only
  	{
  		$scope.lunch_menu = "Please enter data first";
  		$scope.fontcolor = {"color":"red"};
  		return;
  	}

  	$scope.fontcolor = {"color":"green"};
	var menus = $scope.lunch_menu.split(',');

  	if(menus.length <= 3)
  	{
  		$scope.lunch_menu = "Enjoy!";		
  	}
  	else
  	{
  		$scope.lunch_menu = "Too much!";
  	}

  };
}

})();
