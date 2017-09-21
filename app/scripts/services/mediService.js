'use strict';

angular.module('mediApp')
	.constant('baseURL', 'http://localhost:3000/')

	.service('userService', ['$resource', 'baseURL', function($resource, baseURL){
		this.getUserDrugs = function() {
            return $resource(baseURL+'userDrugs/:id',
                            null, {'update':{method:'PUT'}});
        };
	}])
;