'use strict';
angular.module('mediApp')
.controller('MainCtrl', function ($scope, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	console.log($stateParams.val);	
  });
