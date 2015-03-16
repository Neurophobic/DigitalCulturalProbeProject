'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);



angular.module('core').controller('CarouselDemoCtrl',
function ($scope, $animate) {
	$animate.enabled(false);
	$scope.slides = [
	{ image: 'modules/core/img/project-form.png' },
	{ image: 'modules/core/img/project-slide-new.png', text: 'blah' },

	];
});

angular.module('core').controller('taskCarousel',
function ($scope, $animate) {
	$animate.enabled(false);
	$scope.slides = [
	{ image: 'modules/core/img/task-slide1.png' },


	];
});

angular.module('core').controller('appCarousel',
function ($scope, $animate) {
	$animate.enabled(false);
	$scope.slides = [
	{ image: 'modules/core/img/app-slide1.png' },


	];
});

angular.module('core').controller('insightsCarousel',
function ($scope, $animate) {
	$animate.enabled(false);
	$scope.slides = [
	{ image: 'modules/core/img/insights-slide1.png' },


	];
});
