angular.module('MySpace').controller('BodyCtrl', function($scope, $state, $rootScope, menuService) {
	$scope.items = [];
	$scope.tobeLoadedState = null;
	$scope.subMenuSelectedLabel = null;
	$scope.subMenuSelectedAction = null;
	$rootScope.$on('updateSubMenuItems', function(scopeObj, menu) {
		console.log('updateSubMenuItems broadcast');
		$scope.items = menuService.getSubMenuItems(menu);
		$scope.loadDefaultSubMenu();
	});

	$scope.$on('loadDefaultSubMenu', function() {
		$scope.loadDefaultSubMenu();
	});
	$scope.loadStateToCenterContent = function(labelValue, actionValue) {
		$scope.subMenuSelectedLabel = labelValue;
		$scope.subMenuSelectedAction = actionValue;
		$scope.load();
	}
	$scope.highlightSubmenu = function(label) {
		if (label === $scope.subMenuSelectedLabel)
			return true;
		else return false;
	}
	$scope.loadDefaultSubMenu = function() {
		if ($scope.items) {
			$scope.subMenuSelectedLabel = $scope.items[0].label;
			$scope.subMenuSelectedAction = $scope.items[0].action;
			$scope.load();
		}
	}
	$scope.load = function() {
		var stateUrl = '';
		if ($scope.subMenuSelectedAction) {
			stateUrl = 'employee.main.'+menuService.getSelectedParentMenu().split(' ').join('').toLowerCase()+'.' + $scope.subMenuSelectedAction.toLowerCase(); 
			$state.go(stateUrl);
			console.log(stateUrl);
		}
	}
});