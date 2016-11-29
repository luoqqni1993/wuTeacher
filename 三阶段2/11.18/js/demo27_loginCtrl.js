
app.controller("loginCtrl",function($scope,$http,$timeout,$location){
	$scope.loginMessage = "欢迎登录";
	$scope.toLogin = function(){
		console.log("我要登录");
		if($scope.userID == undefined || $scope.password == undefined){
			$scope.loginMessage = "请填写完整用户信息";
		}else{
			//先判断输入的合法性
			//fkjdngkangnfjrewgkfsakfdnkjewnndsf
			//hiughiugi2986983t98foidsa
			$scope.loginMessage = "正在登录，稍安勿躁";
			//如果输入合法
//			$http.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+$scope.userID+"&password="+$scope.password).then(function(data){
//				console.log(data)
//				$timeout(function(){
//					$scope.loginMessage = "登录成功,3s之后进入首页";
//					$timeout(function(){
//						$scope.loginMessage = "登录成功,2s之后进入首页";
//						$timeout(function(){
//							$scope.loginMessage = "登录成功,1s之后进入首页";
//							$location.path("/home");
//						},1000)
//					
//					},1000)
//				},1000)
//				
//			});
			$http({
				method:"POST",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					"status":"login",
					"userID":$scope.userID,
					"password":$scope.password
				},
				 headers:{'Content-Type': 'application/x-www-form-urlencoded'},  
			   	transformRequest: function(obj) {  
			     var str = [];  
			     for(var p in obj){  
			       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
			     }  
			     return str.join("&");  
			   }  
			}).success(function(data){
				console.log(data)
				
				if(data == "0"){
					$scope.loginMessage = "用户名不存在";
				}else if(data == "2"){
					$scope.loginMessage = "密码错误";
				}else{
					localStorage.setItem("isLogin",true);
					localStorage.setItem("userID",$scope.userID);
					$timeout(function(){
						$scope.loginMessage = "登录成功,3s之后进入首页";
						$timeout(function(){
							$scope.loginMessage = "登录成功,2s之后进入首页";
							$timeout(function(){
								$scope.loginMessage = "登录成功,1s之后进入首页";
								$location.path("/home");
							},1000)
						
						},1000)
					},1000)
				}
				
				
			})
			
		}
	}
});
