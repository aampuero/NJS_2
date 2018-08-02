angular.module('pruebaNode2').factory('RecursosService', function($http){
	return {
		getRecursosRecibidos : function(){
			return $http.get('/recursos/recibidos');
		},
		getRecursosEnviados : function(){
			return $http.get('/recursos/enviados')
		},
		getDetalle : function(recurso){
			return $http.get('/recurso/'+recurso.id)
		}
	}
});