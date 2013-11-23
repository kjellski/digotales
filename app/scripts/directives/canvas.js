var canvasDirectives = angular.module('directives', []);

canvasDirectives.directive('ngCanvasViewer', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/partials/canvas.html'
  };
});

canvasDirectives.directive('ngCanvasEditor', function() {
  return {
    restrict: 'E',
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});