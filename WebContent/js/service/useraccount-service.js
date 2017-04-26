'use strict';

// Definition of service function.

var configFunction = function($http, $q, $httpParamSerializer, $location) {
	var userconfservice = this;
	
	
	
};
//Adding of service to module.
AppuserConfigure.service('UserConfigureService', [ '$http', '$q',
		'$httpParamSerializer','$location', configFunction ]);