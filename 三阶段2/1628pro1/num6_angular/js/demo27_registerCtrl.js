
app.controller("registerCtrl",function($scope,$http,$timeout,$location){
	$scope.registerMessage = "欢迎注册";
	$scope.toRegister = function(){
		console.log("我要注册");
		if($scope.userID == undefined || $scope.password == undefined){
			$scope.registerMessage = "请填写完整用户信息";
		}else{
			//先判断输入的合法性
			//fkjdngkangnfjrewgkfsakfdnkjewnndsf
			//hiughiugi2986983t98foidsa
			$scope.registerMessage = "正在注册";
			//如果输入合法
			$http.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+$scope.userID+"&password="+$scope.password).then(function(data){
				console.log(data)
				$timeout(function(){
					$scope.registerMessage = "注册成功,3s之后进入登录页面";
					$timeout(function(){
						$scope.registerMessage = "注册成功,2s之后进入登录页面";
						$timeout(function(){
							$scope.registerMessage = "注册成功,1s之后进入登录页面";
							$location.path("/login");
						},1000)
					
					},1000)
				},1000)
				
			});
			
		}
	}
});
