(function () {
'use strict';

angular.module('MenuList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  //category list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menu/templates/category-list.template.html',
    controller: 'CategoryListController as categoryList',
    resolve: {
      categories: ['MenuService', function (MenuService) {
        return MenuService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/categories/{categoryShortName}',
    templateUrl: 'src/menu/templates/category-items.template.html',
    controller: 'categoryItemController as itemsCtrl',
    params: {
          categoryShortName: null,
          categoryName: null
        },
    resolve: {
      items: ['$stateParams', 'MenuService',
            function ($stateParams, MenuService) {

              //console.log($stateParams.categoryShortName);
              return MenuService.getItemsForCategory($stateParams.categoryShortName);

            }]
    }
  });

}

})();
