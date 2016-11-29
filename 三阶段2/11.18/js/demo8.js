angular.module("myApp",[])
		.controller("myFirstCtrl",["$scope",function($scope){
			var persons = [
				{
					firstName:"ruibo",
					lastName:"dong",
					sex:"male",
					like:0,
					disLike:0,
					age:"22",
					birthday:"1994-6-7"
				},
				{
					firstName:"muhang",
					lastName:"li",
					sex:"male",
					like:0,
					disLike:0,
					age:"22",
					birthday:"1994-9-27"
				},
				{
					firstName:"ruihua",
					lastName:"li",
					sex:"female",
					like:0,
					disLike:0,
					age:"21",
					birthday:"1995-8-25"
				},
				{
					firstName:"yuqi",
					lastName:"yang",
					sex:"female",
					like:0,
					disLike:0,
					age:"22",
					birthday:"1994-6-5"
				},
				{
					firstName:"chuan",
					lastName:"chen",
					sex:"male",
					like:0,
					disLike:0,
					age:"23",
					birthday:"1993-12-6"
				},
				{
					firstName:"tianhua",
					lastName:"zhang",
					sex:"male",
					like:0,
					disLike:0,
					age:"23",
					birthday:"1993-11-19"
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
			
			$scope.counter = 0;
			$scope.count = function(){
				$scope.counter++;
			}
		}])