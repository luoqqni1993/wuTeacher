var app = angular.module("myApp",[]);
app.controller("myCtrl",["$scope",function($scope){
	var baseUrl = "tpls/include/";
	$scope.tplName = baseUrl + "home.html";
	$scope.testInfo = "我是测试数据";
	$scope.current = 0;
	$scope.testClick = function(page,id){
		$scope.tolName = baseUrl + page;
		$scope.current = id;
	}
}]);
app.controller("homeCtrl",["$scope","$rootScope",function($scope,$rootScope){
	$scope.testInfo = "hahahhahahahah";
}]);
app.controller("testCtrl",["$scope","$rootScope",function($scope,$rootScope){
}]);