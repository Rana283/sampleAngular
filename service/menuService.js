angular.module('MySpace').factory('menuService', function() {

	var selectedParentMenu = null,
		subMenuItems = [],
		userProfileMenus = [{
			label: 'Change Password',
			action: ''
		}, {
			label: 'Manage Alert Notifications',
			action: ''
		}, {
			label: 'Logout',
			action: ''
		}],
		userMenus = [{
			label: 'My Details',
			action: '',
			subMenuItems: [{
				label: 'Basic Info',
				action: 'basicInfo'
			}, {
				label: 'Holidays',
				action: 'holidays'
			}, {
				label: 'Policy & Procedure',
				action: 'policy&procedure'
			}, {
				label: 'Employee Extensions',
				action: 'employeeextensions'
			}]
		}, {
			label: 'Time Management',
			action: '',
			subMenuItems: [{
				label: 'Time Sheet & Holidays',
				action: 'timesheet&holidays'
			}, {
				label: 'Leaves',
				action: ''
			}, {
				label: 'Work From Home',
				action: ''
			}, {
				label: 'On Duty',
				action: ''
			}]
		}, {
			label: 'Performance Appraisal',
			action: '',
			subMenuItems: []
		}, {
			label: 'Travel Management',
			action: '',
			subMenuItems: []
		}, {
			label: 'Hire Management',
			action: '',
			subMenuItems: []
		}, {
			label: 'Dashboard',
			action: '',
			subMenuItems: []
		}];
	return {
		getSubMenuItems: function(primaryMenuItem) {
			angular.forEach(userMenus, function(item) {
				if (item.label === primaryMenuItem) {
					subMenuItems = item.subMenuItems;
				}
			});
			return subMenuItems;
		},
		setSubMenuItems: function(newItems) {
			subMenuItems = newItems;
		},
		getUserProfileMenus: function() {
			return userProfileMenus;
		},
		getUserMenus: function() {
			return userMenus;
		},
		setSelectedParentMenu: function(parentMenuSelected) {
			selectedParentMenu = parentMenuSelected;
		},
		getSelectedParentMenu: function(parentMenuSelected) {
			return selectedParentMenu;
		}
	};
});