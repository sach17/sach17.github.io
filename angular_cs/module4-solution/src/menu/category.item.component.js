(function () {
'use strict';

angular.module('MenuList')
.component('items', {
  templateUrl: 'src/menu/templates/category-item-data.template.html',
  bindings: {
    items: '<'
  }
});

})();
