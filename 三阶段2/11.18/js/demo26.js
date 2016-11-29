//将路由的ngroute模块注入
var app = angular.module("myApp",["ngRoute"]);
//路由的配置$routeProvider
app.config(function($routeProvider){
	$routeProvider.when("/home",{
		//直接在页面需要显示的位置显示信息
//		template:"我是首页"
		templateUrl:"tpls/26route/home.html",
		controller:"homeCtrl"
	}).when("/kind",{
//		template:"我是分类"
		templateUrl:"tpls/26route/kind.html",
		controller:"kindCtrl"
	}).when("/user",{
//		template:"我是个人中心"
		templateUrl:"tpls/26route/user.html",
		controller:"userCtrl"
	}).otherwise({
		redirectTo:"/home"
	})
});
app.controller("myCtrl",function($scope,$location){
	$scope.backHome = function(){
		console.log("你要回去？")
		//路由重定向，指向哪一个路径$location
		$location.path("/home")
	}
	
	$scope.message="我是路由来的";
});
app.controller("homeCtrl",function($scope){
	$scope.message="我是首页路由来的";
});
app.controller("kindCtrl",function($scope){
	$scope.message="我是分类路由来的";
});
app.controller("userCtrl",function($scope){
	$scope.message="我是用户路由来的";
});