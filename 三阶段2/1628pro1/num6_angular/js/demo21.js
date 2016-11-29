var app = angular.module("myApp",[]);
//数据不在本地了，要从服务器去获取，我们就需要用到一个服务  $http,我们需要在用到的地方去注入
app.controller("myCtrl",["$scope","$http","$interval",function($scope,$http,$interval){
	//从服务器获取
	$scope.isLoading = true;
	$scope.time = 0;
	$scope.loadingContent = "正在加载数据"
	var timer = $interval(function(){
		$scope.time++;
	},1000);
	
	$http.get("http://datainfo.duapp.com/shopdata/getclass.php").then(function(response){
		console.log(response.data);
		$scope.isLoading = !$scope.isLoading;
		$scope.classList = response.data;
		$scope.time = 0;
	},function(error){
		console.log(error);
		$scope.loadingContent = "数据加载失败";
		$interval.cancel(timer);
		$scope.time = "";
	});
	$scope.countLikeNum = function(person){
		person.like++;
	}
	$scope.countDisLikeNum = function(person){
		person.disLike++;
	}
}]);
