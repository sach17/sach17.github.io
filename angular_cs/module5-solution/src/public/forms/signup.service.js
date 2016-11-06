(function () {
'use strict';

	angular.module('public')
		.service('SignUpService', SignUpService)
	;

	SignUpService.$inject = ['$http', 'ApiPath'];
	function SignUpService($http, ApiPath) {

		//console.log(ApiPath);

	  	var service = this;

	  	service.ApiPath = ApiPath;
	  	service.registered = false;
	  	service.fav_data = {};

	  	service.userinfo = {};

	  	service.getFavouriteItemByShortName = function (menuItemShortName) {

	    	return $http.get(ApiPath + '/menu_items/' + menuItemShortName + '.json').then(function (response) {
		      //console.log(response.data);
		      return response.data;
		    })
		    .catch(function (error) {
			    console.log(error);
			    return error;
		    });

	  	};

	  	service.storeFavoriteItem = function (FavItemObject) {
	  		service.fav_data = FavItemObject;
	  		//console.log(service.storeService);
	  	};

	  	service.storeUserInfo = function (first_name, last_name, email, phone) {
	  		service.userinfo.fName = first_name;
		  	service.userinfo.lName = last_name;
		  	service.userinfo.email = email;
		  	service.userinfo.phone = phone;
	  	};

	  	service.reg = function () {
	  		service.registered = true;
	  	};

	  	service.getFavouriteMenuItem = function () {
	  		return service.fav_data;
	  	};

	  	service.isRegistered = function () {
	  		return service.registered;
	  	};

	  	service.getUserData = function () {
	  		return service.userinfo;
	  	};


	}

})();