'use strict';

angular.module('mediApp')
.controller('MedicationCtrl', ['$scope', '$stateParams', 'userService', function ($scope, $stateParams, userService) {
    var userMedications = userService.getUserDrugs().query();
   $scope.userMedications = userMedications;
    
    console.log(userMedications);
}]);