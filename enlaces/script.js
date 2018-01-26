var app = angular.module("enlace",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/inicio',{
			templateUrl: 'inicio.html',
			controller:'InicioController'
		}).
		when('/bonus-malus',{
			templateUrl: 'bonus-malus.html',
			controller:'BonusController'
		}).
		when('/xml',{
			templateUrl: 'xml.html',
			controller:'XMLController'
		}).
		when('/cursos-online',{
			templateUrl: 'cursos-online.html',
			controller:'CursosController'
		}).
		otherwise({redirectTo:'/inicio'})
}])

.controller('InicioController',['$scope', function($scope){

}])

.controller('BonusController',['$scope', '$http', function($scope, $http){
	$http.get('enlaces.json')then(function(response){
		$scope.enlaces = response.data;
	});
}])

.controller('XMLController',['$scope', '$http', function($scope, $http){
	$http.get('enlaces.json')then(function(response){
		$scope.enlaces = response.data;
	});
}])

.controller('CursosController',['$scope', '$http', function($scope, $http){
	$http.get('enlaces.json')then(function(response){
		$scope.enlaces = response.data;
	});
}]);
