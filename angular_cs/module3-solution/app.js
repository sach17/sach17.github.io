(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        
        var menu = this;
        
        menu.searchData = "";
        menu.foundItems = "";

        menu.search = function() {

            menu.nothingFound = ""; 
                var promise = MenuSearchService.getMatchedMenuItems(menu.searchData.toLowerCase());
                
                if(promise.length==0)
                {
                  menu.nothingFound = "Nothing found";
                }
                else
                {

                promise.then(function(foundItems) {
                    if (foundItems.length == 0) {
                        menu.nothingFound = "Nothing found";
                    }
                    menu.foundItems = foundItems;
                })
              }
        };

        menu.removeItem = function(itemIndex) {
            menu.foundItems.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchData) {
            var response = $http({
                url: (ApiBasePath + "/menu_items.json")
            });
            var foundItems = [];
            if(searchData)
            {

            return response.then(function(result) {
                var menuData = result.data;
                

                menuData.menu_items.forEach(function(item) {
                    if (item.description.indexOf(searchData) != -1) {
                        foundItems.push({
                            name: item.name,
                            description: item.description,
                            short_name: item.short_name
                            
                        });
                    }
                });
                return foundItems;
            });
          }
          else
            return [];
        };
    }

})();