angular.module('MySpace').controller('proAllcationCtrl', function($scope) {
    
    $scope.proAlloationArray = [{client_name:"Innominds(Us)"}];
           $scope.custom = false;
        $scope.editClientDetailsHander=function()
        {
            $scope.custom = $scope.custom === false ? true: false;

        }
});
