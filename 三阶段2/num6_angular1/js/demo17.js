var app = angular.module("myApp", []);

app.controller("myFirstCtrl", ["$scope", function($scope) {
	$scope.current = 0;
	
	$scope.changeIndex = function(id){
		$scope.current = id;
	}
}]);
