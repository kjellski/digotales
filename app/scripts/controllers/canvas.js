'use strict';
var canvasControllers = angular.module('canvasControllers', []);

canvasControllers.controller('CanvasCtrl', ['$scope', '$rootScope', 'ImageDropService', 'CanvasDataService',
  function($scope, $rootScope, ImageDropService, CanvasDataService) {
    var canvasElement = document.getElementById('canvas-id');
    var canvasWidth = 580;
    var canvasHeight = 400;

    //console.log($scope);

    var canvas = new fabric.Canvas('canvas-id');

    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);

    $scope.canvas = canvas;

    var assetCategoryContainer = 'asset-category-container';
    var canvasEventHandlerAdded = false;

    $rootScope.$on('dropImage', function() {
      console.log('droppedImage');
      $scope.droppedImage = ImageDropService.image;
      $scope.addImage();
    });

    $rootScope.$on('requestCanvasJSON', function() {
      console.log('requestedCanvasJSON')
      CanvasDataService.responseCanvasJSON($scope.canvas.toJSON());
    });

    $scope.addImage = function(img, e) {
      var newImage = new fabric.Image(img, {
        width: img.width,
        height: img.height,
        // Set the center of the new object based on the event coordinates relative
        // to the canvas container.
        left: e.layerX,
        top: e.layerY
      });
      $scope.canvas.add(newImage);
    }

    $scope.updateDrapAndDropHandler = function() {

      function handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect = 'copy';

        return false;
      }

      function handleDragEnter(e) {
        this.classList.add('over');
      }

      function handleDragLeave(e) {
        this.classList.remove('over');
      }

      function handleDrop(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }
        if (e.stopPropagation) {
          e.stopPropagation(); // stops the browser from redirecting.
        }

        var img = document.querySelector('.' + assetCategoryContainer + ' img.img-dragging');
        $scope.addImage(img, e);

        return false;
      }

      if (Modernizr.draganddrop) {
        // Bind the event listeners for the canvas
        if (!canvasEventHandlerAdded) {
          var canvasContainer = document.getElementById('canvas-container');
          canvasContainer.addEventListener('dragenter', handleDragEnter, false);
          canvasContainer.addEventListener('dragover', handleDragOver, false);
          canvasContainer.addEventListener('dragleave', handleDragLeave, false);
          canvasContainer.addEventListener('drop', handleDrop, false);
          canvasEventHandlerAdded = true;
        }
      } else {
        // Replace with a fallback to a library solution.
        alert("This browser doesn't support the HTML5 Drag and Drop API.");
      }
    };

    $scope.updateDrapAndDropHandler();
  }
]);