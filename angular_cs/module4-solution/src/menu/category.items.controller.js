(function () {
'use strict';

angular.module('MenuList')
.controller('categoryItemController', categoryItemController);

categoryItemController.$inject = ['$stateParams', 'MenuService', 'items'];

function categoryItemController($stateParams, MenuDataService, items) {
  console.log(items);
  var itemsCtrl = this;
  itemsCtrl.items = items;

  itemsCtrl.categoryShortName = $stateParams.categoryShortName;
  itemsCtrl.categoryName = $stateParams.categoryName;
  //console.log(itemsCtrl);
}

})();
