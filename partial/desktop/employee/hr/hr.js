angular.module('MySpace').controller('hrCtrl', function($scope, ngDialog) {

	$scope.getEmpDocsHandler = function() {
		ngDialog.open({
			template: 'partial/' + base +
				'employee/hr/components/upload.html',
			className: 'ngdialog-theme-default ngdialog-theme-custom',
			plain: false,
			showClose: true,
			closeByDocument: true,
			closeByEscape: true,
			appendTo: false,
			preCloseCallback: function() {
				console.log('default pre-close callback');
			}
		});
	}
});