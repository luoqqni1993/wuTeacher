var myModule = angular.module('myModule', ['ui.router'])
	//大小写不区分
	.config(function($urlMatcherFactoryProvider) {
		$urlMatcherFactoryProvider.caseInsensitive(true);
	})
	//默认页面
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
	})

.config(function($locationProvider) {
	$locationProvider.html5Mode(true);
})

.config(function($stateProvider) {

		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "Templates/27.3/home.html",
				controller: "homeController",
				controllerAs: "homeCtrl",
				data: {
					customData1: "首页自定义数据1",
					customData2: "首页自定义数据2"
				}
			})
			.state("courses", {
				url: "/courses",
				templateUrl: "Templates/27.3/courses.html",
				controller: "coursesController",
				controllerAs: "coursesCtrl",
				data: {
					customData1: "课程自定义数据1",
					customData2: "课程自定义数据2"
				}
			})
			.state("employees", {
				url: "/employees",
				templateUrl: "Templates/27.3/employees.html",
				controller: "employeesController",
				controllerAs: "employeesCtrl",
				resolve: {
					employeeslist: function($http) {
						return $http.get("http://localhost:8888/angular/employee.cfm")
							.then(function(response) {
								return response.data;
							})
					}
				}
			})
			.state("employeesSearch", {
				url: "/employeesSearch/:firstname",
				templateUrl: "Templates/27.3/employeesSearch.html",
				controller: "employeesSearchController",
				controllerAs: "employeesSearchCtrl"
			})
			.state("employeeDetail", {
				url: "/employees/:id",
				templateUrl: "Templates/27.3/employeedetail.html",
				controller: "employeeDetailController",
				controllerAs: "employeeDetailCtrl"
			})
	})
	.controller('homeController', function($state) {
		this.message = "Home page";

		this.homeCustomData1 = $state.current.data.customData1;
		this.homeCustomData2 = $state.current.data.customData2;

		this.coursesCustomData1 = $state.get("courses").data.customData1;
		this.coursesCustomData2 = $state.get("courses").data.customData2;

	})
	.controller('coursesController', function() {
		this.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function(employeeslist, $state, $location) {
		var vm = this;

		vm.employeesSearch = function() {
			$state.go("employeesSearch", {
				firstname: vm.firstname
			});
		}

		vm.reloadData = function() {
			$state.reload();
		}

		vm.employees = employeeslist;
	})
	.controller("employeesSearchController", function($http, $stateParams) {
		var vm = this;

		if ($stateParams.firstname) {
			$http({
				url: "http://localhost:8888/angular/employeesearch.cfm",
				method: "get",
				params: {
					firstname: $stateParams.firstname
				}
			}).then(function(response) {
				vm.employees = response.data;
			})
		} else {
			$http.get("http://localhost:8888/angular/employee.cfm")
				.then(function(response) {
					vm.employees = response.data;
				})
		}
	})
	.controller('employeeDetailController', function($http, $stateParams) {
		var vm = this;
		$http({
			url: "http://localhost:8888/angular/employeedetail.cfm",
			params: {
				id: $stateParams.id
			},
			method: "get"
		}).then(function(response) {
			vm.employee = response.data[0];
		})
	});