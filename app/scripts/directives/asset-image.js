'use strict';

angular.module('digotalesApp')
  .directive('ngAssetImage', ['ImageDropService',
    function(ImageDropService) {
      return {
        templateUrl: 'views/directives/asset-image.html',
        restrict: 'E',
        scope: '@',
        link: function postLink(scope, element, attrs) {

          var assetCategoryContainer = 'asset-category-container';
          // get at the image node itself, first and only one inside the
          // directive
          var img = element.get(0).childNodes[0];

          function handleDragEnd(e) {
            // this/e.target is the source node.
            img.classList.remove('img-dragging');
            ImageDropService.prepareDropImage(img);
            ImageDropService.dropImage();
            console.log('handleDragEnd: ', e);
          }

          function handleDragStart(e) {
            // this/e.target is the source node.
            img.classList.add('img-dragging');
            console.log('handleDragStart: ', e);
          }

          if (Modernizr.draganddrop) {
            // Browser supports HTML5 DnD.
            img.addEventListener('dragstart', handleDragStart, false);
            img.addEventListener('dragend', handleDragEnd, false);
          }
        }
      };
    }
  ]);