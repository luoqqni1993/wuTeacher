
app.controller("cartCtrl",function($scope,$http,$location){
	var userID = localStorage.getItem("userID");
	$scope.isLoading = true;
	$scope.deleteStr = "删除";
	$scope.isNone = false;
	
	
	$http.jsonp("http://datainfo.duapp.com/shopdata/getCar.php?callback=JSON_CALLBACK&userID="+userID).success(function(data){
		console.log(data)
		$scope.isLoading = false;
		if(data.length > 0 ){
			$scope.cartList = data;
		}else{
			$scope.isNone = true;
		}
		
	})
	
	$scope.delete = function(pro,id){
			$http.get("http://datainfo.duapp.com/shopdata/updatecar.php?userID="+userID+"&goodsID="+pro.goodsID+"&number=0").then(function(response){
				console.log(typeof response.data)
				if(response.data == "1"){
					console.log("ok")
					$scope.cartList.splice(id,1)
					if($scope.cartList.length <=0){
						$scope.isNone = true;
					}
				}
				
			})
		
		
		
	}
});
