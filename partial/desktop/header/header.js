angular.module('MySpace').controller('HeaderCtrl', function($scope,$rootScope, $state, menuService, userService) {

	$scope.appName = 'myspace';
	$scope.bellCount = 0;
	$scope.mailCount = 0;
	$scope.userName = '';
	$scope.menuSelected = 'My Details';
	$scope.userInfo = {};
	$scope.userMenusAction = [];
	$scope.empFilterData = ["rana", "kiran", "mishra", "deepthi", "praveen", "prasanna"];
	$scope.userProfileClicked = 'glyphicon-chevron-up';
	$scope.init = function() {

		setTimeout(function() {
			if (!userData) {
				var userData = {"empinfo":{"empid":"1124","empname":"Deepthi Talluri","email":"dtalluri@innominds.com","skype_id":"","pds_mobile_num":"","work_phone_no":"080-40447400","rtype":"Regular","department_name":"Engineering","work_location":"Innominds (Hyderabad)","plocation":"Innominds (Hyderabad)","practice_name":"QA","competency":"Mobile","work_station":"Y23","designation":"Manager-Software Engineering"},"notifications":{"birthday":"1","annivarsary":"0","empnotifications":"1","alerts_timesheet":13,"pending_leaves":0},"token":null};
				$scope.userInfo = userData;
				$scope.userName = userData.empinfo.empname;
				$scope.bellCount = userData.notifications.empnotifications;
				$scope.menuSelected = userData.empinfo.defaultMenu || 'My Details';
				menuService.setSelectedParentMenu($scope.menuSelected);
				$scope.fireManagedEvents();
			} else {
				$state.go("login");
			}
		}, 500);
	}
	$scope.getEmployeeHandler = function() {

	}
	$scope.getUserProfileState = function(actionState) {
		if (actionState != "Logout") {
			$state.go('employee.main.mydetails.' + actionState.split(' ').join('').toLowerCase());
		} else {
			sessionStorage.clear();
			$state.go('login');
		}

		$scope.openPolicyBoxHandler = function() {
               
		}

	}
	$scope.fireManagedEvents = function() {
		$rootScope.$broadcast('updateSubMenuItems', $scope.menuSelected);

		$scope.userProfileAction = menuService.getUserProfileMenus();
		$scope.userMenusAction = menuService.getUserMenus();

		$rootScope.$broadcast('loadDefaultSubMenu');
	}

	$scope.checkUserProfileClicked = function() {
		if ($scope.userProfileClicked == 'glyphicon-chevron-up') {
			$scope.userProfileClicked = 'glyphicon-chevron-down';
		} else {
			$scope.userProfileClicked = 'glyphicon-chevron-up';
		}
	}
	$scope.updateMenu = function(element) {
		$scope.menuSelected = this.item.label;
		menuService.setSubMenuItems((this.item.subMenuItems.length > 0) ? this.item.subMenuItems : [{
			label: 'Coming soon',
			action: ''
		}]);
		menuService.setSelectedParentMenu($scope.menuSelected);
		$rootScope.$broadcast('updateSubMenuItems');

	}
	$scope.getCurrentSelectedMenu = function(label) {
		if (label == $scope.menuSelected) {
			return 'glyphicon-ok';
		}
	}
	$scope.init();

});