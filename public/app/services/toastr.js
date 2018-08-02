angular.module('pruebaNode2').service('ToastService', function (toastr){
	
	this.success = function(msg){
		toastr.success(msg);
	},
	this.error = function(msg){
		toastr.error(msg);
	}
});