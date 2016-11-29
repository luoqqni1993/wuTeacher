
app.controller("homeCtrl",["$scope","$http","$interval","$rootScope",function($scope,$http,$interval,$rootScope){
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
	if(localStorage.getItem("classList")){
		$scope.isLoadindList = false;
		$scope.classList = JSON.parse(localStorage.getItem("classList"));
	}else{
		$http.get('http://datainfo.duapp.com/shopdata/getclass.php').then(function(response){
			$scope.isLoadindList = false;
			$scope.classList = response.data;
			localStorage.setItem("classList",JSON.stringify(response.data));
		})
	}

	$rootScope.isLogin = localStorage.getItem("isLogin")=="true"?true:false;
	
	//获取商品列表数据
	$scope.getHotList = function(){
		var hotList = localStorage.getItem("hotList");
		
		if(hotList){
			$scope.isLoading = false;
			var list = JSON.parse(hotList);
			$scope.proList = list;
		}else{
			$scope.isLoading = true;
			//加载首页列表的时间
			$scope.time = 0;
			//商品列表加载计时器
			var timer = $interval(function(){
				$scope.time++;
			},1000);
			$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK").success(function(data){
//			console.log( data);
			//隐藏加载字样
			$scope.isLoading = !$scope.isLoading;
			localStorage.setItem("hotList",JSON.stringify(data));
			//绑定商品的列表数据
			$scope.proList = data;
			$interval.cancel(timer);
		});
		}
		
	}
	//自动执行我们的获取热卖的产品列表
	$scope.getHotList();
	
	//快速根据商品的分类进行查询数据
	$scope.searchData = function(obj){
		
		var result = localStorage.getItem("list"+obj.classID);
		
		if(result){
			var list = JSON.parse(result);
			$scope.proList = list;
		}else{
			$scope.isLoading = true;
			//加载首页列表的时间
			$scope.time = 0;
			//商品列表加载计时器
			var timer = $interval(function(){
				$scope.time++;
			},1000);
			$scope.loadingContent = "正在加载数据";
			$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK&classID="+obj.classID).success(function(data){
	//			console.log(data);
				if(data){
					//隐藏加载字样
					$scope.isLoading = !$scope.isLoading;
		//			//绑定商品的列表数据
					$scope.proList = data;
					localStorage.setItem("list"+obj.classID,JSON.stringify(data))
				}else{
					console.log("hahahahahhahahahaahahah");
					$scope.loadingContent = "没有该数据";
				}
				$interval.cancel(timer);
				
			});
		}
		
		
	}
	
	
	$scope.goShopCart = function(pro){
		var userID = localStorage.getItem("userID");
		$http.get("http://datainfo.duapp.com/shopdata/updatecar.php?userID="+userID+"&goodsID="+pro.goodsID+"&number=1").then(function(data){
			console.log(data)
		})
	}
	
	//搜索全站商品
	$scope.searchPro = function(){
		var searchTxt = $scope.searchProTxt;
		if(searchTxt == ""){
			$scope.proList = JSON.parse(localStorage.getItem("hotList"));
		}else{
			var str = encodeURI(searchTxt);
			$http.jsonp("http://datainfo.duapp.com/shopdata/selectGoodes.php?callback=JSON_CALLBACK&selectText="+str).success(function(response){
			console.log(response)	
			$scope.proList = response;
			})
		}
	}
}]);

