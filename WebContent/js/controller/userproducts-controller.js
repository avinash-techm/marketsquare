'use strict';

var AppproductConfigure = angular.module('productconfigure', [ ]);

var productconfigCtrl = function($log, $scope, $interval, $location, ProductConfigureService) {
	
	var userconfCtrl = this;
	$scope.product = []; 
	$scope.detailsyourproducts = true;
	$scope.detailsyourproducts1 = false;
	$scope.detailsyourproducts2 = false;
	$scope.detailsyourproducts3 = false;
	$scope.detailsyourproducts4 = false;
	
	this.productsaccount = function()
	{
		$scope.detailsyourproducts = false;
		$scope.detailsyourproducts1 = true;
		$scope.detailsyourproducts2 = false;
		$scope.detailsyourproducts3 = false;
		$scope.detailsyourproducts4 = false;	
	}
	
	this.productsaccount1 = function()
	{
		$scope.detailsyourproducts = false;
		$scope.detailsyourproducts1 = false;
		$scope.detailsyourproducts2 = true;
		$scope.detailsyourproducts3 = false;
		$scope.detailsyourproducts4 = false;
	}
	
	this.productsaccount2 = function()
	{
		$scope.detailsyourproducts = false;
		$scope.detailsyourproducts1 = false;
		$scope.detailsyourproducts2 = false;
		$scope.detailsyourproducts3 = true;
		$scope.detailsyourproducts4 = false;	
	}
	
	this.productsaccount3 = function()
	{
		$scope.detailsyourproducts = false;
		$scope.detailsyourproducts1 = false;
		$scope.detailsyourproducts2 = false;
		$scope.detailsyourproducts3 = false;
		$scope.detailsyourproducts4 = true;
	}
};
//Register of main controller function with config module.
AppproductConfigure.controller('productconfCtrl', [ '$log', '$scope', '$interval',
		'ProductConfigureService', productconfigCtrl ]);