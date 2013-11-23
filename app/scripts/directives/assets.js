'use strict';

angular.module('digotalesApp')
  .directive('ngAssetsViewer', function () {
    return {
      templateUrl: 'views/directives/assets/viewer.html',
      restrict: 'E',
      controller: 'AssetsCtrl',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
