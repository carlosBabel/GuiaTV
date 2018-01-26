var app = angular.module("enlace",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'inicio.html',
			controller:'InicioController'
		}).
		when('/bonus-malus',{
			templateUrl: 'bonus-malus.html',
			controller:'InicioController'
		}).
		when('/xml',{
			templateUrl: 'xml.html',
			controller:'XMLController'
		}).
		when('/cursos-online',{
			templateUrl: 'cursos-online.html',
			controller:'InicioController'
		}).
		otherwise({redirectTo:'/inicio'})
}])

.controller('InicioController',['$scope', function($scope){

}])

.controller('XMLController', function($scope, $http){
	$http.get('enlaces.json')then(function(response){
		console.log($scope.data);
		$scope.enlaces = response.data;
	});
});

