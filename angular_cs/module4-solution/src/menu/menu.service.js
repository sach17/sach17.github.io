(function () {
'use strict';

angular.module('MenuList')
.service('MenuService', MenuService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

MenuService.$inject = ['$http', 'ApiBasePath'];
function MenuService( $http, ApiBasePath) {
  var service = this;

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var categories = [];
    var response = $http({
                url: (ApiBasePath + "/categories.json")
            });
    return response.then(function(result) {
                var categoryData = result.data;
                

                categoryData.forEach(function(category) {
                        categories.push({
                            name: category.name,
                            id: category.id,
                            short_name: category.short_name
                            
                        });
                });
                return categories;
            });

  };

  service.getItemsForCategory = function (categoryShortName) {

      return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      })
      .then(function (result) {
          return result.data.menu_items;// return all the data
      })
      .catch(function (error) {
          console.log(error);
      });

  };

}

})();
