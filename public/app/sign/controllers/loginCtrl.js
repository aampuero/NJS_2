angular.module('pruebaNode2').controller('loginCtrl', function($scope, $http, $state, ToastService, Session){
	$scope.master = {};

	$scope.signin = function(){
		var usuario = {username : $scope.usuario.username, password : $scope.usuario.password};
		Session.logIn(usuario)
		.then(function (response){
			if (response.data.success) {
				ToastService.success('Correcto!');
				$state.transitionTo('app.dashboard');
			}else{
				ToastService.error('Verificar datos nuevamente!');
				$scope.usuario = angular.copy($scope.master);
				$scope.form.$setPristine();
			}
		});
	}


	Session.isLogged()
	.then(function(response){
		var isLogged = response.data.isLogged;
		if (isLogged) {
			$state.go('app.dashboard');
		}
	});

});