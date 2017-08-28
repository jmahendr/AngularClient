'use strict';
angular.module('mediApp')
.controller('MainCtrl', ['$scope', '$stateParams', 'userService', 
                         function ($scope, $stateParams, userService) {
  
    //$scope.medications = [{drug:'a'},{drug:'d'},{drug:'f'},{drug:'b'}];
    $scope.medications = userService.getUserDrugs().query();
	console.log($scope.medications);
}]);
