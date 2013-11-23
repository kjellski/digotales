var canvasDirectives = angular.module('directives', []);

canvasDirectives.directive('ngFabricCanvasViewer', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/partials/canvas.html'
  };
});

canvasDirectives.directive('ngFabricCanvasEditor', function() {
  return {
    restrict: 'E',
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});