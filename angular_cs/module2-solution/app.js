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
.controller('ToBuyListController', ToBuyListController)
.controller('AlreadyBoughtListController', AlreadyBoughtListController)  
.service('ListCheckOffService', ListCheckOffService);

ToBuyListController.$inject = ['ListCheckOffService'];

ShoppingListController.$inject = ['$scope'];

function ToBuyListController(ListCheckOffService) {
      var buyList = this;
      buyList.buyItem = function($index) {
          ListCheckOffService.buyItem($index);
      }
      buyList.items = ListCheckOffService.getAvailableItems();
}

AlreadyBoughtListController.$inject = ['ListCheckOffService'];

function AlreadyBoughtListController(ListCheckOffService) {
      var boughtList = this;
      boughtList.items = ListCheckOffService.getBoughtItems();
}

function ListCheckOffService() {
      var service = this;
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

      var boughtList = [];

      service.buyItem = function(itemIndex) {
          boughtList.push(buyList[itemIndex]);
          buyList.splice(itemIndex, 1); // removes item from toBuyItems
      };

      service.getAvailableItems = function() {
          return buyList;
      };

      service.getBoughtItems = function() {
          return boughtList;
      };
    }

})();
