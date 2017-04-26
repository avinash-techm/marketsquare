'use strict';

var AppuserConfigure = angular.module('userconfigure', ['ngStorage']);

var userconfigCtrl = function($scope, $localStorage, $sessionStorage, $interval, $location, UserConfigureService) {
	
	var userconfCtrl = this;
	$scope.users = [];  
	$scope.aleuserEmail = false;
	$scope.aleuserpassword = false;
	$scope.CreateyourAccount = true;
	$scope.CreateyourAccount1 = false;
	$scope.CreateyourAccount2 = false;
	$scope.CreateyourAccount3 = false;
	$scope.CreateyourAccount4 = false;
	$scope.SelectAppropriate = null;
	$scope.CategorySupplier = null;
	
	this.useraccount = function()
	{
		if ($scope.useremail == null) {
			$scope.aleuserEmail = true;
			return;
		}else
		{
			$scope.aleuserEmail = false;	
		}
		if ($scope.userpassword == null) {
			$scope.aleuserpassword =true;
			return;
		}else
		{
			$scope.aleuserpassword = false;	
		}
		$scope.CreateyourAccount = false;
		$scope.CreateyourAccount1 = true;
		$scope.CreateyourAccount2 = false;
		$scope.CreateyourAccount3 = false;
		$scope.CreateyourAccount4 = false;	
	};
	
	this.useraccount1 = function()
	{
		$scope.CreateyourAccount = false;
		$scope.CreateyourAccount1 = false;
		$scope.CreateyourAccount2 = true;
		$scope.CreateyourAccount3 = false;
		$scope.CreateyourAccount4 = false;	
	};
	
	this.useraccount2 = function()
	{
		$scope.CreateyourAccount = false;
		$scope.CreateyourAccount1 = false;
		$scope.CreateyourAccount2 = false;
		$scope.CreateyourAccount3 = true;
		$scope.CreateyourAccount4 = false;
	};
	
	this.useraccountskip = function()
	{
		$scope.CreateyourAccount = false;
		$scope.CreateyourAccount1 = false;
		$scope.CreateyourAccount2 = false;
		$scope.CreateyourAccount3 = false;
		$scope.CreateyourAccount4 = true;	
	}
	this.useraccount3 = function()
	{
		$scope.CreateyourAccount = false;
		$scope.CreateyourAccount1 = false;
		$scope.CreateyourAccount2 = false;
		$scope.CreateyourAccount3 = false;
		$scope.CreateyourAccount4 = true;
		
		$scope.users.useremail = $scope.useremail;
		$scope.users.userpassword = $scope.userpassword;
		$scope.users.Businessname = $scope.Businessname;
		$scope.users.SelectAppropriate = $scope.SelectAppropriate;
		$scope.users.CategorySupplier = $scope.CategorySupplier;
		$scope.users.useraddress2 = $scope.useraddress2;
		$scope.users.useraddress2 = $scope.useraddress2;
		$scope.users.usercity = $scope.usercity;
		$scope.users.userstate = $scope.userstate;
		$scope.users.userzip = $scope.userzip;
		$scope.users.userphone = $scope.userphone;
		$scope.users.useforshipping = $scope.useforshipping;
		$scope.users.usercardname = $scope.usercardname;
		$scope.users.usercardnumber = $scope.usercardnumber;
		$scope.users.usercardaddress1 =  $scope.usercardaddress1;
		$scope.users.usercardaddress2 = $scope.usercardaddress2;
		$scope.users.usercardcity = $scope.usercardcity;
		$scope.users.usercardstate = $scope.usercardstate;
		$scope.users.usercardzip = $scope.usercardzip;
		$scope.users.useralerttypenow = $scope.useralerttypenow;
		$scope.users.useralerttypelatter = $scope.useralerttypelatter;
		$scope.users.userfinalemail = $scope.userfinalemail;
		$scope.users.userfinalmobile = $scope.userfinalmobile;
		$scope.users.yesaddnow = $scope.yesaddnow;
		$scope.users.notaddnow = $scope.notaddnow;
		
		var oldReports = JSON.parse($window.localStorage.getItem("UserDetails"));
		$window.localStorage.setItem("UserDetails",angular.toJson($scope.users));		
		
	};

};
//Register of main controller function with config module.
AppuserConfigure.controller('userconfCtrl', ['$scope', '$localStorage', '$sessionStorage', '$interval',
		'UserConfigureService', userconfigCtrl ]);