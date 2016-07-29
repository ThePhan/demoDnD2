//router

var page = require('page');

var React = require('react');
var ReactDom = require('react-dom');
var Common = require('frankly/lib/common');
var NoPermission = require('frankly/my-sites/no-permission');

var controller = require('my-sites/controller'),
	config = require('config'),
	dashboardController = require('./controller');

module.exports = function() {
	page(
		'/dashboard_1',
		controller.navigation,
		dashboardController.hello
	);
	// Anything else is unexpected and should be redirected to the default people management URL: /people/team


};
