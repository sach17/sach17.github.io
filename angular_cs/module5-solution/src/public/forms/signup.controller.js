(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignUpService'];
function SignupController(SignUpService) {
  var signupCtrl = this;
  signupCtrl.firstName = "";
  signupCtrl.lastName = "";
  signupCtrl.email = "";
  signupCtrl.phone = "";
  signupCtrl.menuShortName = "";
  signupCtrl.completed = false;

  signupCtrl.submit = function () {
  	//console.log(signupCtrl.firstName + " " + signupCtrl.lastName + " " + signupCtrl.email + " " + signupCtrl.phone + " " + signupCtrl.menuShortName);
    //signupCtrl.completed = true;
    var promise = SignUpService.getFavouriteItemByShortName(signupCtrl.menuShortName);
    
  	promise.then(function (response) {
			signupCtrl.menuItem = response;
			//console.log("ab");console.log(signupCtrl.menuItem);console.log("cd");
		})
		.then(function () {
			if(signupCtrl.menuItem.short_name)
			{
				//console.log("Favorite item is present");
				SignUpService.storeFavoriteItem(signupCtrl.menuItem);
		    	SignUpService.storeUserInfo(signupCtrl.firstName, signupCtrl.lastName, signupCtrl.email, signupCtrl.phone);
		    	signupCtrl.completed = true;
		    	SignUpService.reg();
		    	signupCtrl.firstName = "";
			  	signupCtrl.lastName = "";
			  	signupCtrl.email = "";
			  	signupCtrl.phone = "";
			  	signupCtrl.menuShortName = "";
		    	signupCtrl.message = "Your information has been saved";
			}
			else
			{
				//console.log("Item does not exist");
				signupCtrl.message = 'No such ' + signupCtrl.menuShortName + ' menu number exists';
				signupCtrl.firstName = "";
			  	signupCtrl.lastName = "";
			  	signupCtrl.email = "";
			  	signupCtrl.phone = "";
			  	signupCtrl.menuShortName = "";
				signupCtrl.completed = false;
			}
		})
	    .catch(function (error) {
	      	console.log(error);
	    })

	    ;
  };
}

})();
