'use strict';


var tasksApp = angular.module('tasks');
// Tasks controller
tasksApp.controller('TasksController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tasks','Notify', '$modal', '$log','$rootScope',
	function($scope, $stateParams, $location, Authentication, Tasks, Notify, $modal, $log, $rootScope) {
		$scope.authentication = Authentication;

		this.tasks = Tasks.query();

		this.modalCreate = function (size) {

			var modalInstance = $modal.open({
				templateUrl: 'modules/tasks/views/create-task.client.view.html',


				controller: function ($scope, $modalInstance) {


					$scope.ok = function () {
						$modalInstance.close();
					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};


				},
				size: size


			});

			modalInstance.result.then(function (selectedItem) {
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
		var thisProject = $scope.passedProjectId;
		// Create new Task
		/*this.create = function() {
			// Create new Task object
			var task = new Tasks ({
				name: this.name,
				purpose: this.purpose,
				type: this.type,
				project: $scope.passedProjectId
			});

			// Redirect after save
			task.$save(function(response) {

				Notify.sendMsg('NewTask',{'id': response._id});

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};*/

		// Remove existing Task
		$scope.remove = function(task) {
			if ( task ) {
				task.$remove();

				for (var i in $scope.tasks) {
					if ($scope.tasks [i] === task) {
						$scope.tasks.splice(i, 1);
					}
				}
			} else {
				$scope.task.$remove(function() {
					$location.path('tasks');
				});
			}
		};

		// Update existing Task
		$scope.update = function() {
			var task = $scope.task;

			task.$update(function() {
				$location.path('tasks/' + task._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Tasks
		$scope.find = function() {
			$scope.tasks = Tasks.query();

		};

		// Find existing Task
		$scope.findOne = function() {
			$scope.task = Tasks.get({
				taskId: $stateParams.taskId
			});

			$rootScope.passedTaskId = $stateParams.taskId;
		};



		$scope.findRightOne = function() {

			$scope.task = Tasks.get({
				project: $scope.passedProjectId
			});
			console.log($scope.passedProjectId);


		};


		$scope.setId = function(taskid) {

			$rootScope.taskId = taskid;
			console.log($rootScope.taskId);


		};
	}
]);


tasksApp.controller('TasksCreateController', ['$scope', '$stateParams', 'Authentication', 'Tasks','$modal', '$log','Notify',
	function($scope, $stateParams, Authentication, Tasks, $modal, $log, Notify){

		var thisProject = $scope.passedProjectId;
		// Create new Task
		this.create = function() {
			// Create new Task object
			var task = new Tasks ({
				name: this.name,
				purpose: this.purpose,
				type: this.type,
				project: $scope.passedProjectId
			});

			// Redirect after save
			task.$save(function(response) {

				Notify.sendMsg('NewTask', {'id': response._id});



			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


	}
	]);



/*

	tasksApp.controller('TasksCreateController', ['$scope', '$stateParams','Authentication','Tasks','$modal', '$log', 'Notify','$rootScope',
	function($scope,$stateParams, Authentication, Tasks, $modal, $log, Notify, $rootScope) {


		// Create new Customer
		$scope.create = function() {
			// Create new Task object
			var task = new Tasks ({
				name: this.name,
				purpose: this.purpose,
				type: this.type,
				project: $scope.passedProjectId
			});

			// Redirect after save
			task.$save(function(response) {

				Notify.sendMsg('NewTask',{'id': response._id});

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


	}
	]);

*/
tasksApp.directive('taskList', ['Tasks', 'Notify', function(Tasks, Notify) {

	return {
		restrict:'E',
		transclude: true,
		templateUrl: 'modules/tasks/views/task-list-template.html',
		link: function(scope, element, attrs){

			//when a new customer is added, update customer list

			Notify.getMsg('NewTask', function(event, data){

				scope.tasksCtrl.tasks = Tasks.query();

			});

		}
	};

}]);
