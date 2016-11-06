(function () {
'use strict';

	angular.module('public')
		.component('user', {

			templateUrl: 'src/public/user/user-info.component.html',
			bindings: {
				userInfo: "<"
			}

		})
	;


})();