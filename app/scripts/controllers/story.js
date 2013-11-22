'use strict';

var storyControllers = angular.module('storyControllers', [])

storyControllers.controller('StoryListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/api/stories/:id').success(function(stories) {
      $scope.stories = stories;
    });
  }]);

storyControllers.controller('StoryDetailsCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.storyId = $routeParams.storyId;
  }]);
