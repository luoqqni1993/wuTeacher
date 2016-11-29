var app = angular.module("myApp",[]);
//数据不在本地了，要从服务器去获取，我们就需要用到一个服务  $http,我们需要在用到的地方去注入
app.controller("myCtrl",["$scope","$http",function($scope,$http){
	$http.get("js/person.json").then(function(response){
		console.log(response.data);
		
		$scope.persons = response.data;
	},function(error){
		console.log(error)
	});
	
	$scope.countLikeNum = function(person){
		person.like++;
	}
	$scope.countDisLikeNum = function(person){
		person.disLike++;
	}
}]);
