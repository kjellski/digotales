'use strict';

angular.module('digotalesApp')
  .directive('ngHolder', function () {
    return {
      link: function (scope, element, attrs) {
        console.log(element.get(0).src)
        //if(element.get(0).src !== undefined)
          //Holder.run({images:element.get(0), nocss:true});
      }
    };
  });
