angular.module('MySpace').controller('authCtrl', function($scope, $rootScope, $state, userService) {

    $scope.appName = 'MySpace';
 $state.go('employee.main.mydetails');
    $scope.authicationHandler = function() {
        userService.getUserDetails($scope.username, $scope.password).success(function(response) {
            var userData = response.body;
            userService.storeLoginInfo(userData);
            $state.go('employee.main.mydetails');
        });
    };
    // $state.go('employee');
    // }
});
