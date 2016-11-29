//路由的配置$routeProvider
app.config(function($routeProvider){
	$routeProvider.when("/home",{
		//直接在页面需要显示的位置显示信息
		templateUrl:"tpls/27pro/home.html",
		controller:"homeCtrl"
	}).when("/cart",{
		templateUrl:"tpls/27pro/cart.html",
		controller:"cartCtrl"
	}).when("/login",{
		templateUrl:"tpls/27pro/login.html",
		controller:"loginCtrl"
	}).when("/register",{
		templateUrl:"tpls/27pro/register.html",
		controller:"registerCtrl"
	}).when("/detail/:goodsID",{
		templateUrl:"tpls/27pro/detail.html",
		controller:"detailCtrl"
	}).otherwise({
		redirectTo:"/home"
	})
});
app.config(function($httpProvider){  
   $httpProvider.defaults.transformRequest = function(obj){  
     var str = [];  
     for(var p in obj){  
       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
     }  
     return str.join("&");  
   }  
   $httpProvider.defaults.headers.post = {  
        'Content-Type': 'application/x-www-form-urlencoded'  
   }  
}); 