angular.module('MySpace').controller('skillCtrl', function($scope) {

    $scope.SkillDetailsArray = [{
        category: "",
        skillName: "",
        pecificSkills: "",
        icon: ""
    }]
    $scope.categorys = [{
        name: "UIServices"
    }, {
        name: "Uxservices"
    }, {
        name: "Java"
    }, {
        name: "DB"
    }];

    $scope.skillNames = [{
        name: "Java"
    }, {
        name: ".net"
    }, {
        name: "Cloud"
    }, {
        name: "AdobeFlex"
    }, {
        name: "Javascript"
    }]
    $scope.flag=true;
    $scope.addNewRowHandler = function() {
        $scope.SkillDetailsArray.push({
            category: "",
            skillName: "",
            pecificSkills: "",
        });
         $scope.flag=false;
        // $(".icon-bullet-add").("background", "url(partial/desktop/assets/delete_icon.png) no-repeat");
} 
    $scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.SkillDetailsArray);
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.SkillDetailsArray.splice( index, 1 );		
	};
});
