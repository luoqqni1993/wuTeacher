angular.module("myApp",[])
		.controller("myFirstCtrl",["$scope",function($scope){
			var persons = [
				{
					firstName:"ruibo",
					lastName:"Dong",
					sex:"male",
					salary:"12000.333",
					like:0,
					disLike:0,
					age:"22",
					birthday:new Date("1994-6-7")
				},
				{
					firstName:"muhang",
					lastName:"Li",
					sex:"male",
					salary:"12001.333",
					like:0,
					disLike:0,
					age:"22",
					birthday:new Date("1994-9-27")
				},
				{
					firstName:"ruihua",
					lastName:"Li",
					sex:"female",
					salary:"14001.333",
					like:0,
					disLike:0,
					age:20.2,
					birthday:new Date("1995-8-25")
				},
				{
					firstName:"yuqi",
					lastName:"Yang",
					sex:"female",
					salary:"13001.333",
					like:0,
					disLike:0,
					age:"22",
					birthday:new Date("1994-6-5")
				},
				{
					firstName:"chuan",
					lastName:"Chen",
					sex:"male",
					salary:"17001.333",
					like:0,
					disLike:0,
					age:22.8,
					birthday:new Date("1993-12-6")
				},
				{
					firstName:"tianhua",
					lastName:"Zhang",
					sex:"male",
					salary:"25000.333",
					like:0,
					disLike:0,
					age:"23",
					birthday:new Date("1993/11/19")
				}
			];
			
			$scope.persons = persons;
			
			$scope.countLikeNum = function(person){
//				console.log(person)
				person.like++;
			}
			$scope.countDisLikeNum = function(person){
//				console.log(person)
				person.disLike++;
			}
			//默认按照哪一个进行排序
			$scope.sortType = "firstName";
			//排序的时候使用，正序环视倒序，和sortType进行结合，就可以实现
			//在页面中的ng-repeat的时候，加一个 |orderBy:sortType:reverseData
			$scope.reverseData = false;
			
			//点击排序
			$scope.sortData　= function(item){
				console.log(1)
				//获取当前的这一列的正序还是倒序,并且把所有的其他值都置为统一的false;
				//我只关注我自己,其他的我统一对待
				$scope.reverseData = ($scope.sortType == item) ? !$scope.reverseData :false;
				$scope.sortType = item;
				
				
				//只有一个的排序时可以这么写
//				$scope.reverseData = !$scope.reverseData;
//				if($scope.reverseData){
//					$scope.sortType = item;
//				}else{
//					$scope.sortType = -item;
//				}
			}
			
			//添加的排序符号函数,页面中使用ng-class进行调用
			$scope.getClass = function(item){
				//选中自己
				if($scope.sortType == item){
					//通过当前的排序变量进行展示我们不同的图标
					return $scope.reverseData ? "glyphicon glyphicon-chevron-up" :"glyphicon glyphicon-chevron-down";
				}
				//视情况而定到底需不需要这个
//				else{
//					return "glyphicon glyphicon-chevron-down";
//				}


				//只有一个的排序时可以这么写
//				console.log("class")
//				if($scope.reverseData){
//					return "glyphicon glyphicon-chevron-up"
//				}else{
//					return "glyphicon glyphicon-chevron-down"
//				}
			}
			
		}])