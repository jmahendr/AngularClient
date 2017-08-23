'use strict';

angular.module('mediApp')
	.constant('baseURL', 'http://localhost:3000/')

	.service('userService', ['$resource', 'baseURL', function($resource, baseURL){
		this.getUser = function(user) {
			return {user: 'hello' + user,
				    url: baseURL};
		};
	}]);