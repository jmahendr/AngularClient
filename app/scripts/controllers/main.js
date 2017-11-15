'use strict';
angular.module('mediApp')
.controller('MainCtrl', ['$scope', '$stateParams', 'userService', 'ngDialog',
                         function ($scope, $stateParams, userService, ngDialog) {

  $scope.medications = userService.getUserDrugs().query();
	console.log($scope.medications);

  $scope.openLogin = function () {
    ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-content', controller:"MainCtrl" });
  };
  /*
  $scope.logOut = function() {
     AuthFactory.logout();
      $scope.loggedIn = false;
      $scope.username = '';
  };

  $rootScope.$on('login:Successful', function () {
      $scope.loggedIn = AuthFactory.isAuthenticated();
      $scope.username = AuthFactory.getUsername();
  });
  */
}]);
