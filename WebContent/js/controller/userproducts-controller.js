'use strict';

var AppuserConfigure = angular.module('userconfigure', [ ]);

var userconfigCtrl = function($log, $scope, $interval, $location, UserConfigureService) {
	
	
	
};
//Register of main controller function with config module.
AppuserConfigure.controller('userconfCtrl', [ '$log', '$scope', '$interval',
		'UserConfigureService', userconfigCtrl ]);