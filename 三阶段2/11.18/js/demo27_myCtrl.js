
app.controller("myCtrl",function($scope,$rootScope){
	//判断用户登录状态
	console.log(typeof localStorage.getItem("isLogin"))
	$rootScope.isLogin = localStorage.getItem("isLogin")=="true"?true:false;
	$scope.exit = function(){
		console.log("exit")
		$rootScope.isLogin = false;
		localStorage.setItem("isLogin",false);
	}
});
