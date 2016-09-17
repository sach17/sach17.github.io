(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  $scope.lunch_menu = "";
  $scope.content="";
  $scope.message="";

  $scope.check_count = function () {
  	
  	if($scope.lunch_menu=="") //handles when textbox is empty or containing spaces only
  	{
  		$scope.content = "Pleas enter data first";
  		$scope.message = {"color":"red"};

  		return;
  	}

	var menus = $scope.lunch_menu.split(',');
	$scope.message = {"color":"green"};
  	if(menus.length <= 3)
  	{
  		$scope.content = "Enjoy!";		
  	}
  	else
  	{

  		$scope.content = "Too much!";
  	}

  };
}

})();
