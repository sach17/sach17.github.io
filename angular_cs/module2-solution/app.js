(function () {
'use strict';

var buyList = [
  
  {
    name: "Cups",
    quantity: "3"
  },
  {
    name: "Donuts",
    quantity: "5"
  },
  {
    name: "Cookies",
    quantity: "4"
  },
  {
    name: "Chocolates",
    quantity: "1"
  },
  {
    name: "Pepto Bismol",
    quantity: "6"
  },
  {
    name: "Peanut Butter",
    quantity: "2"
  }

];

angular.module('Check Off', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.buyList = buyList;
  $scope.boughtList = [];
  $scope.boughterrorMessage=true;
  $scope.buyerrorMessage=false;

  $scope.addToBoughtList = function ($quantity, $name) {

    var newItem = {
      name: $quantity,
      quantity: $name
    };

    $scope.boughtList.push(newItem);
  };

  $scope.removeItem = function ($index) {
    console.log($scope.buyList.length);
    //console.log($scope.buyList[1].name);
    
    $scope.boughterrorMessage=false;

    if($scope.buyList.length==1)
    {
      $scope.buyerrorMessage=true;
    }

    $scope.addToBoughtList($scope.buyList[$index].quantity, $scope.buyList[$index].name);
    $scope.buyList.splice($index, 1);
    

  };
}

})();
