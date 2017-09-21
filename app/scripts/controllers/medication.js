'use strict';

angular.module('mediApp')
.controller('MedicationCtrl', ['$scope', '$stateParams', 'userService', function ($scope, $stateParams, userService) {
	
	function selectTab(setTab) {
		if(setTab === 'home') {
			var userMedications = userService.getUserDrugs().query();
			$scope.userMedications = userMedications;
			console.log(userMedications);
		}
		console.log('selectTab invoked with ' + setTab);
		$scope.selection = {selected: setTab};
		console.log($scope.selection.selected);
	}
	
	console.log($scope.selection);
	if(typeof $scope.selection === 'undefined'){
		selectTab('home');
	}
		
    


	
	function isSelected(tab) {
		return $scope.selection.selected === tab;
	}
	
	$scope.isSelected = isSelected;
	
	$scope.selectTab = selectTab;
}]);