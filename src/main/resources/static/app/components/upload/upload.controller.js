(function() {
	angular.module('app').controller("UploadController", UploadController);
	UploadController.$inject = ['Upload'];
	function UploadController(Upload) {
		
		var vm = this;
		
	    vm.upload = function () {
	        Upload.upload({
	            url: 'api/upload',
	            data: {file: vm.file}
	        }).then(function (resp) {
	            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
	        }, function (resp) {
	            console.log('Error status: ' + resp.status);
	        }, function (evt) {
	            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
	        });
	    };
	}
	
})();