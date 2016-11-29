
app.controller("detailCtrl",function($scope,$routeParams,$http){
	$scope.goodsID = $routeParams.goodsID;
	
	$scope.isLoading = true;
	$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK&goodsID="+$routeParams.goodsID).success(function(data){
//		console.log(data[0].goodsName)
		$scope.product = data[0];
		$scope.isLoading = !$scope.isLoading;
	})
});
