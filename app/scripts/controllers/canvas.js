'use strict';
var canvasControllers = angular.module('canvasControllers', []);

canvasControllers.controller('CanvasCtrl', function ($scope) {
    var canvasElement = document.getElementById('canvas');
    var canvasWidth = 580;
    var canvasHeight = 400;

    var canvas = new fabric.Canvas('canvas');

    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);

    console.log(canvas, 'initialized.');
  });
