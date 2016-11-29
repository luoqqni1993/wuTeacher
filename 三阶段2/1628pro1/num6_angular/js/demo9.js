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
			var len = persons.length;
			var isFirst = localStorage.getItem("isFirst");
			
			if(!localStorage.getItem("isFirst")){
				console.log("1111")
				for(var i = 0; i < len; i++){
	//				localStorage.setItem("key","value");
	//				localStorage.key = "value";
	//				localStorage['key'] = "value";
					var key = persons[i].lastName + persons[i].firstName;
					localStorage.setItem(key+"like",persons[i].like)
					localStorage.setItem(key+"disLike",persons[i].disLike)
				}
				localStorage.setItem("isFirst",isFirst);
			}else{
				console.log(2222)
				for(var i = 0; i < len; i++){
	//				localStorage.setItem("key","value");
	//				localStorage.key = "value";
	//				localStorage['key'] = "value";
					var key = persons[i].lastName + persons[i].firstName;
					persons[i].like = localStorage.getItem(key+"like")
					persons[i].disLike =localStorage.getItem(key+"disLike")
				}
				console.log(persons)
			}
			
			
			$scope.persons = persons;
			$scope.countLikeNum = function(person){
//				console.log(person)
				var key = person.lastName + person.firstName;
				localStorage.setItem(key+"like",++person.like)
//				person.like++;
			}
			$scope.countDisLikeNum = function(person){
//				console.log(person)
				var key = person.lastName + person.firstName;
				localStorage.setItem(key+"disLike",++person.disLike)
//				person.disLike++;
			}
			
			$scope.counter = 0;
			$scope.count = function(){
				$scope.counter++;
			}
		}])