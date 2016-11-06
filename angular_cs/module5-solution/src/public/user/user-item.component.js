(function () {

'use strict';

	angular.module('public')
		.component('userItem', {

			templateUrl: 'src/public/user/user-item.component.html',
			bindings: {
				userItem: '<',
			}

		})
	;

})();