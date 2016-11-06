(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['SignUpService'];
function UserInfoController(SignUpService) {

  	var userInfoCtrl = this;

  	userInfoCtrl.isRegistered = SignUpService.isRegistered();
  	//userInfoCtrl.ApiPath = SignUpService.ApiPath;
  	userInfoCtrl.menuItem = SignUpService.getFavouriteMenuItem();
  	userInfoCtrl.userInfo = SignUpService.getUserData();
  	userInfoCtrl.menuItem.ApiPath = SignUpService.ApiPath;
  	//console.log(userInfoCtrl.userInfo);
  	//console.log(userInfoCtrl.menuItem);
  	//console.log(userInfoCtrl.ApiPath + userInfoCtrl.isRegistered);

}

})();