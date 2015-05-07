'use strict';

module.exports = {
	app: {
		title: 'dcp',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3001,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
			'public/lib/bootstrap/dist/css/bootstrap.css',
			'public/lib/bootstrap/dist/css/bootstrap-theme.css',
			],
			js: [
			'public/lib/jquery/dist/jquery.js',
			'public/lib/angular/angular.js',
			'public/lib/angular-resource/angular-resource.js',
			'public/lib/angular-cookies/angular-cookies.js',
			'public/lib/angular-animate/angular-animate.js',
			'public/lib/angular-touch/angular-touch.js',
			'public/lib/angular-sanitize/angular-sanitize.js',
			'public/lib/angular-ui-router/release/angular-ui-router.js',
			'public/lib/angular-ui-map/ui-map.js',
			'public/lib/angular-ui-utils/ui-utils.js',
			'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
			'public/lib/ngFlowGrid/ngFlowGrid.js',
			'public/lib/angular-deckgrid/angular-deckgrid.js',
			'public/lib/angular-mosaic/angular-mosaic.js',
			'public/lib/angular-filter/dist/angular-filter.js',
			'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=onGoogleReady'
			]
		},
		css: [
		'public/modules/**/css/*.css'
		],
		js: [
		'public/config.js',
		'public/application.js',
		'public/modules/*/*.js',
		'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
		'public/lib/angular-mocks/angular-mocks.js',
		'public/modules/*/tests/*.js'
		]
	}
};
