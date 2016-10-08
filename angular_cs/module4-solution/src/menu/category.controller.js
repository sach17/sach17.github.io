(function () {
'use strict';

angular.module('MenuList')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['categories'];
function CategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories;
}

})();
