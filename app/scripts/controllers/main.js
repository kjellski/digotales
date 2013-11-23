'use strict';

angular.module('digotalesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/story').success(function(stories) {
      $scope.stories = stories;
    });
  });
