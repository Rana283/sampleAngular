angular.module('MySpace').controller('empCtrl', function($scope, $state) {

	$scope.tabSelectedLabel = "Primary";
	$scope.tabs = [{
		title: 'Primary'
	}, {
		title: 'HR'
	}, {
		title: 'Education'
	}, {
		title: 'Experience'
	}, {
		title: 'Travel'
	}, {
		title: 'Skills'
	}, {
		title: 'Project Allocation'
	}, {
		title: 'IT Assets'
	}, {
		title: 'Health Insurance'
	}, {
		title: 'Vehicle Details'
	}];
	$scope.defaultTab = function() {
		debugger;
		$state.go('employee.main.mydetails.basicinfo.primary');
	}
	$scope.defaultTab();
	$scope.setState = function(tabName) {
		$state.go('employee.main.mydetails.basicinfo.' + tabName.split(' ').join('').toLowerCase());
		$scope.tabSelectedLabel = tabName;
	}
	$scope.getState = function(tabName) {
		return $scope.currentTab;
	}

	$scope.highlightSubmenu = function(label) {
		if (label === $scope.tabSelectedLabel)
			return true;
		else return false;
	}



});