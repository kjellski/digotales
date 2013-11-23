'use strict';

angular.module('digotalesApp')
  .directive('ngHolder', function () {
    return {
      link: function (scope, element, attrs) {
        Holder.run({images:element.get(0), nocss:true});
      }
    };
  });
