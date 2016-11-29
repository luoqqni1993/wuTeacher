//将路由的ngroute模块注入
var app = angular.module("myApp",["ngRoute"]);
//路由的配置$routeProvider
app.config(function($routeProvider){
	$routeProvider.when("/home",{
		template:"我是首页"
	}).when("/kind",{
		template:"我是分类"
	}).when("/user",{
		template:"我是个人中心"
	}).otherwise({
		redirectTo:"/home"
	})
})
