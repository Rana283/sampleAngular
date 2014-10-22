angular.module('MySpace').factory('userService', ["$http",
	function($http) {
		var userInfo = null,
			url = "http://192.168.208.228/myspaceapi/employee/logincheck",
			getUserDetails = function(userName, password) {
				return $http.post(url, {
					uname: userName,
					pwd: password
				});

			},
			storeLoginInfo = function(userInfo1) {
				userInfo = userInfo1;
				sessionStorage.user = angular.toJson(userInfo);
			},
			retriveLoginInfo = function() {
				if (userInfo)
					return userInfo;
				else if (sessionStorage.user)
					return angular.fromJson(sessionStorage.user);
				else
					return null;
			}
		return {
			getUserDetails: getUserDetails,
			storeLoginInfo: storeLoginInfo,
			retriveLoginInfo: retriveLoginInfo
		}
	}
]);