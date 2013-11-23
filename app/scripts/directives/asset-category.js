'use strict';

angular.module('digotalesApp')
  .directive('ngAssetCategoryViewer', function () {
    return {
      templateUrl: 'views/directives/asset-category/viewer.html',
      restrict: 'E',
      controller: 'AssetsCtrl',
      // link: function postLink(scope, element, attrs) {
        
      // }
    };
  });
