'use strict';

angular.module('digotalesApp')
  .directive('ngAssetImage', function() {
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
          img.classList.remove('img-dragging');
        }

        function handleDragStart(e) {
          img.classList.add('img-dragging');
        }

        if (Modernizr.draganddrop) {
          img.addEventListener('dragstart', handleDragStart, false);
          img.addEventListener('dragend', handleDragEnd, false);
        } else {
          alert("This browser doesn't support the HTML5 Drag and Drop API.");
        }
      }
    };
  });