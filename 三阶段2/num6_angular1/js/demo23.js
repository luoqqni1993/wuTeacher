var app = angular.module("myApp",[]);
//数据不在本地了，要从服务器去获取，我们就需要用到一个服务  $http,我们需要在用到的地方去注入
app.controller("myCtrl",["$scope","$http","$interval",function($scope,$http,$interval){
	//从服务器获取
	//加载首页列表标识
	$scope.isLoading = true;
	//加载商品分类标识
	$scope.isLoadindList = true;
	
	//加载商品分类的时间
	$scope.time1 = 0;
	//商品列表加载显示字样
	$scope.loadingContent = "正在加载数据";
	
	//商品分类加载计时器
	var timer1 = $interval(function(){
		$scope.time1++;
	},1000);

	//获取我们产品分类的数据
	$http.get('http://datainfo.duapp.com/shopdata/getclass.php').then(function(response){
//		console.log(response.data)
		$scope.isLoadindList = false;
		$scope.classList = response.data;
	})


	//获取商品列表数据
	$scope.getHotList = function(){
//		console.log("22222222")
		$scope.isLoading = true;
		//加载首页列表的时间
		$scope.time = 0;
		//商品列表加载计时器
		var timer = $interval(function(){
			$scope.time++;
		},1000);
		$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK").success(function(data){
	//		console.log(data);
			//隐藏加载字样
			$scope.isLoading = !$scope.isLoading;
			
			//绑定商品的列表数据
			$scope.proList = data;
			$interval.cancel(timer);
		});
	}
	//自动执行我们的获取热卖的产品列表
	$scope.getHotList();
	
	//快速根据商品的分类进行查询数据
	$scope.searchData = function(obj){
		$scope.isLoading = true;
		//加载首页列表的时间
		$scope.time = 0;
		//商品列表加载计时器
		var timer = $interval(function(){
			$scope.time++;
		},1000);
		$scope.loadingContent = "正在加载数据";
		$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK&classID="+obj.classID).success(function(data){
			console.log(data);
			if(data){
				//隐藏加载字样
				$scope.isLoading = !$scope.isLoading;
	//			//绑定商品的列表数据
				$scope.proList = data;
			}else{
				console.log("hahahahahhahahahaahahah");
				$scope.loadingContent = "没有该数据";
			}
			$interval.cancel(timer);
			
		});
	}
	
}]);
