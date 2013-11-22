'use strict';

var storyControllers = angular.module('storyControllers', [])

storyControllers.controller('StoryListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/api/stories/:id').success(function(stories) {
      $scope.stories = stories;
    });
  }]);

storyControllers.controller('StoryDetailsCtrl', 
  ['$scope', '$http', '$routeParams',
  function ($scope, $http, $routeParams) {
    $http.get('/api/stories/' + $routeParams.storyId).success(function(story) {
      $scope.story = story;
    });
  }]);
