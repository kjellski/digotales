'use strict';
var canvasControllers = angular.module('canvasControllers', []);

canvasControllers.controller('CanvasCtrl', function($scope) {
  var canvasElement = document.getElementById('canvas');
  var canvasWidth = 580;
  var canvasHeight = 400;

  var canvas = new fabric.Canvas('canvas');

  canvas.setHeight(canvasHeight);
  canvas.setWidth(canvasWidth);

  $scope.canvas = canvas;

  var assetCategoryContainer = 'asset-category-container';
  var canvasEventHandlerAdded = false;

  $scope.updateDrapAndDropHandler = function updateDrapAndDropHandler(){//assetCategoryContainer, canvas) {
    
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }

      e.dataTransfer.dropEffect = 'copy'; 

      return false;
    }

    function handleDragEnter(e) {
      // this / e.target is the current hover target.
      this.classList.add('over');
    }

    function handleDragLeave(e) {
      this.classList.remove('over'); // this / e.target is previous target element.
    }

    function handleDrop(e) {
      // this / e.target is current target element.

      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }

      var img = document.querySelector('.' + assetCategoryContainer + ' img.img-dragging');

      console.log('img:', img);
      console.log('event: ', e);

      var newImage = new fabric.Image(img, {
        width: img.width,
        height: img.height,
        // Set the center of the new object based on the event coordinates relative
        // to the canvas container.
        left: e.layerX,
        top: e.layerY
      });
      canvas.add(newImage);

      return false;
    }

    if (Modernizr.draganddrop) {
      // Browser supports HTML5 DnD.

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
});