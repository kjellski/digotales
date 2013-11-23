'use strict';

angular.module('digotalesApp')
  .controller('MainCtrl', function ($scope, Story) {
    $scope.stories = Story.all();
  });
