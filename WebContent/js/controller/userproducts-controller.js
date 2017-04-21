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
		
		$scope.product.UploadProductName = $scope.UploadProductName;
		$scope.product.UploadProductCode = $scope.UploadProductCode;
		$scope.product.UploadProductTraits = $scope.UploadProductTraits;
		$scope.product.UploadProductDescription = $scope.UploadProductDescription;
		$scope.product.UploadProductunitmeasure = $scope.UploadProductunitmeasure;
		$scope.product.UploadProductaskprice = $scope.UploadProductaskprice;
		$scope.product.ProductDetailName = $scope.ProductDetailName;
		$scope.product.ProductDetailSpeciallyTraits = $scope.ProductDetailSpeciallyTraits;
		$scope.product.ProductDetailTraits = $scope.ProductDetailTraits;
		$scope.product.ProductDetailServingSize = $scope.ProductDetailServingSize;
		$scope.product.ProductDetailCalories = $scope.ProductDetailCalories;
		$scope.product.ProductDetailTotalFat = $scope.ProductDetailTotalFat;
		$scope.product.ProductDetailTotalFat = $scope.ProductDetailTotalFat;
		$scope.product.ProductDetailTraitsFats = $scope.ProductDetailTraitsFats;
		$scope.product.ProductDetailCholesterol = $scope.ProductDetailCholesterol;
		$scope.product.ProductDetailSodium = $scope.ProductDetailSodium;
		$scope.product.ProductDetailSugars = $scope.ProductDetailSugars;
		$scope.product.PriceProductName = $scope.PriceProductName;
		$scope.product.PriceUnitofMeasure = $scope.PriceUnitofMeasure;
		$scope.product.PriceUnitSalePrice = $scope.PriceUnitSalePrice;
		$scope.product.PriceBulkContractSales = $scope.PriceBulkContractSales;
		$scope.product.PriceAskPrice = $scope.PriceAskPrice;
		$scope.product.CertificationsProductName = $scope.CertificationsProductName;
		$scope.product.CertificationsProductName = $scope.CertificationsProductNumber;
		$scope.product.CertificationsDocument = $scope.CertificationsDocument;
		$scope.product.CertificationsDocument1 = $scope.CertificationsDocument1;
		$scope.product.CertificationsDocument2 = $scope.CertificationsDocument2;
		$scope.product.CertificationsDocument3 = $scope.CertificationsDocument3;
		$scope.product.CertificationsDocument4 = $scope.CertificationsDocument4;
		$scope.product.CertificationsDocument5 = $scope.CertificationsDocument5;
		
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