'use strict';

angular.module('digotalesApp')
  .controller('AssetCategoryCtrl', ['$scope', '$routeParams', 'AssetCategory',
    function ($scope, $routeParams, AssetCategory) {
      $scope.assetCategories = AssetCategory.all();
      console.log($scope.assetCategories);
  }]);
