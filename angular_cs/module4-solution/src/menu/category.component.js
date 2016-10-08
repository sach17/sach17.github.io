(function () {
'use strict';

angular.module('MenuList')
.component('categoryList', {
  templateUrl: 'src/menu/templates/category-data.template.html',
  bindings: {
    categories: '<'
  }
});

})();
