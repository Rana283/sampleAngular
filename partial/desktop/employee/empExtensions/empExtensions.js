angular.module('MySpace').controller('EmpExtensionsCtrl',function($scope,$filter,ngTableParams){
	var extensions=[{sno:1,code:'1296',name:'Kiran kumar',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:2,code:'1304',name:'dfgdfRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:3,code:'1304',name:'dfgdfgRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:4,code:'1304',name:'awrrewrRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:5,code:'1304',name:'iuiuyRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:6,code:'1304',name:'cbcvhfgtRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:7,code:'1304',name:'nbhvnvRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:8,code:'1304',name:'bbRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:9,code:'1304',name:'dstretrRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:10,code:'1304',name:'poipoipRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:11,code:'1304',name:'qqqRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:12,code:'1304',name:'Rwwana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:13,code:'1304',name:'rrRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:14,code:'1304',name:'ttRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:15,code:'1304',name:'uRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:16,code:'1304',name:'yRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:17,code:'1304',name:'iRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:18,code:'1304',name:'oRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:19,code:'1304',name:'pRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:20,code:'1304',name:'jRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:21,code:'1304',name:'kRana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:22,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:23,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:24,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:25,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:26,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:27,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:28,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'},
					   {sno:29,code:'1304',name:'Rana',number:'3100',location:'Inoominds(Hyd)'}];

	$scope.impExtensions=[{code:'1296',name:'Kiran kumar',number:'3100',location:'Inoominds(Hyd)'}];

	$scope.$watch("filter.$", function () {
        $scope.tableParams.reload();
    });
    
	$scope.lastSelected = null;
    $scope.changeSelection = function(item){
    	item.$selected = true;
    	if($scope.lastSelected)
    	{
    		$scope.lastSelected.$selected = false;    		
    	}
    	$scope.lastSelected = item;
    }

    $scope.tableParams = new ngTableParams({
        page: 1,            
        count: 10,
        sorting: {
            sno: 'asc'
        }
    }, {
        getData: function($defer, params) {
            var filteredData = $filter('filter')(extensions, $scope.filter);
            var orderedData = params.sorting() ?
                                $filter('orderBy')(filteredData, params.orderBy()) :
                                filteredData;
            $scope.extensions = orderedData;
        },
        $scope: $scope
    });
});