'use strict';

angular.module('digotalesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/stories').success(function(stories) {
      $scope.stories = stories;
    });
  })
  .controller('StoryCtrl', function ($scope, $http) {
    $http.get('/api/stories/:id').success(function(stories) {
      $scope.stories = stories;
    });
  });
