angular.module('MySpace').controller('primaryCtrl',
 function($scope,$rootScope,$state,userService) {
   
   $scope.empDetails={};
$scope.init = function() {
    var userInfo=userService.retriveLoginInfo();
     $scope.empDetails = userInfo.empinfo;
}
    $scope.init();

});
