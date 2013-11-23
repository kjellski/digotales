'use strict';

var assetCategoryServices = angular.module('assetCategoryServices', ['ngResource']);
 
assetCategoryServices.factory('AssetCategory', ['$resource',
  function($resource){
    return $resource('/api/asset-category/:assetCategoryTitle', {}, {
      all: {
        method:'GET', 
        isArray:true
      },
      findById: {
        method:'GET', 
        isArray: false,
        params : { assetCategoryTitle: ':assetCategoryTitle'}
      }
    });
  }]);