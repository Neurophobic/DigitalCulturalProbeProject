'use strict';

// Projects controller
var projectsApp = angular.module('projects');

projectsApp.controller('ProjectsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Projects','$rootScope',
function($scope, $stateParams, $location, Authentication, Projects, $rootScope) {
	$scope.authentication = Authentication;


	$scope.imgPath = '/img/profileCircle.png';
	// Create new Project


	// Remove existing Project
	$scope.remove = function(project) {
		if ( project ) {
			project.$remove();

			for (var i in $scope.projects) {
				if ($scope.projects [i] === project) {
					$scope.projects.splice(i, 1);
				}
			}
		} else {
			$scope.project.$remove(function() {
				$location.path('projects');
			});
		}
	};

	// Update existing Project
	$scope.update = function() {
		var project = $scope.project;

		project.$update(function() {
			$location.path('projects/' + project._id);
		}, function(errorResponse) {
			$scope.error = errorResponse.data.message;
		});
	};

	// Find a list of Projects
	$scope.find = function() {
		$scope.projects = Projects.query();
	};



	// Find existing Project
	$scope.findOne = function() {
		$scope.project = Projects.get({
			projectId: $stateParams.projectId
		});

		$rootScope.passedProjectId = $stateParams.projectId;

	};
}
]);


projectsApp.controller('ProjectsCreateController', ['$scope', '$stateParams','Authentication','Projects', '$log', '$location',
function($scope,$stateParams, Authentication, Projects, $log, $location){


	this.create = function() {
		// Create new Project object
		var project = new Projects ({
			name: this.name,
			desc: this.desc,
			participants: this.participants,
			color: this.color


		});

		// Redirect after save
		project.$save(function(response) {
			$location.path('projects/' + response._id);

		}, function(errorResponse) {
			$scope.error = errorResponse.data.message;
		});
	};
}
]);
