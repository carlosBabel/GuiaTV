var app = angular.module("enlace",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/inicio',{
			templateUrl: 'inicio.html',
			controller:'InicioController'
		});
}])

.controller('InicioController',[function(){
		console.log('This is the main controller');
}]);