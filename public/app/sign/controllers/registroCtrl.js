angular.module('pruebaNode2').controller('registroCtrl', function($scope, $http, $state){

	$scope.usuario = {};

	$scope.register = function(){
		$scope.enviando = true;
		$http.post('/registro' , $scope.usuario)
		.then(function(response){
			var data = response.data;
			if (data.success) {
				if (data.logged) {
					$state.transitionTo('app.dashboard');
				}else{
					
					$state.go('login');
				}
			}else{
				console.log("Ocurrio un error.");
				$scope.enviando = false;
			}
		});
	}
});