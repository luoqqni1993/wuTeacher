//创建了一个我们的module
//[] 表示我们之后要进行注入的模块
var app = angular.module("myApp",[]);

//定义了一个控制器
var myCtrl = function($scope){
	$scope.courseName="1628angular";
	$scope.hobby="";
	$scope.person = {
		"name":"孙国瑶",
		"age":18,
		"marry":false,
		"run":function(){
			console.log("ok")
		}
	};
	$scope.lists = [
		{
			"name":"孙国瑶0",
			"age":28,
			"marry":false,
			"run":function(){
				console.log("ok")
			}
		},
		{
			"name":"孙国瑶1",
			"age":38,
			"marry":true,
			"run":function(){
				console.log("ok")
			}
		},
		{
			"name":"孙国瑶2",
			"age":8,
			"marry":false,
			"run":function(){
				console.log("ok")
			}
		},
		{
			"name":"孙国瑶3",
			"age":18,
			"marry":false,
			"run":function(){
				console.log("ok")
			}
		}
	]
	$scope.run = function(){
		console.log("我们在学习")
	}
}

app.controller("myFirstCtrl",myCtrl);