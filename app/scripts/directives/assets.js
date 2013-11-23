'use strict';

angular.module('digotalesApp')
  .directive('assets', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the assets directive');
      }
    };
  });
