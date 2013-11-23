'use strict';
var canvasControllers = angular.module('canvasControllers', []);

canvasControllers.controller('CanvasCtrl', function ($scope) {
    console.log($scope);
    $scope.scene = $scope.story.scenes[$scope.story.actualScene];

    var canvas = new fabric.Canvas($scope.scene);
  });
