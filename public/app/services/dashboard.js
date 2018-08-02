angular.module('pruebaNode2').factory('DashboardService', function($http){

	return {
		getTimeline : function(){
			return $http.get('/timeline');
		}
	}

});