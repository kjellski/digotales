var canvasDirectives = angular.module('canvasDirectives', []);

canvasDirectives.directive('ngCanvasViewer', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/directives/canvas-viewer.html'
  };
});

canvasDirectives.directive('ngCanvasEditor', function() {
  return {
    restrict: 'E',
    controller: 'CanvasCtrl',
    templateUrl: 'views/directives/canvas-editor.html'
  };
});