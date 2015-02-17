'use strict';

//Tasks service used to communicate Tasks REST endpoints
angular.module('tasks')

.factory('Tasks', ['$resource',
	function($resource) {
		return $resource('tasks/:taskId', { taskId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])

.factory('Notify', ['$rootScope', function($rootScope) {

	var notify = {};

	notify.sendMsg = function(msg, data){
		data = data || {};
		$rootScope.$emit(msg, data);

		console.log('message sent!' + data);
	};

	notify.getMsg = function(msg, func, scope){

		var unbind = $rootScope.$on(msg, func);
		console.log('message get!');

		if (scope) {
			scope.$on('destroy', unbind);

		}
	};

	return notify;

}
]);
