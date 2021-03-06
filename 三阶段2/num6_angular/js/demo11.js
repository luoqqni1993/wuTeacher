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
			$scope.sortType = "firstName";
		}])