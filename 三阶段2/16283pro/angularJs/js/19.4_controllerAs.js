var myModule = angular.module('myModule', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "Templates/19.4/home.html",
				controller: "homeController as homeCtrl"
			})
			.when("/courses", {
				templateUrl: "Templates/19.4/courses.html",
				controller: "coursesController as coursesCtrl"
			})
			.when("/employees", {
				templateUrl: "Templates/19.4/employees.html",
				controller: "employeesController as employeesCtrl"
			})
			.when("/employees/:id", {
				templateUrl: "Templates/19.4/employeedetail.html",
				controller: "employeeDetailController as employeeDetailCtrl"
			})
			.otherwise({
				redirectTo: "/home"
			})
	})
	.controller('homeController', function() {
		this.message = "Home page";
	})
	.controller('coursesController', function() {
		this.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function($http) {
		var vm = this;
		$http.get('http://localhost:8888/angular/employee.cfm').then(function(response) {
			// 注意在http里，我们能够使用this吗？这个this它将指向谁呢？
			// this.employees = response.data;
			vm.employees = response.data;
		})
	})
	.controller('employeeDetailController', function($http, $routeParams) {
		var vm = this;
		$http({
			url: "http://localhost:8888/angular/employeedetail.cfm",
			params: {
				id: $routeParams.id
			},
			method: "get"
		}).then(function(response) {
			vm.employee = response.data[0];
		})
	});