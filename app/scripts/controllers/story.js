'use strict';

var storyControllers = angular.module('storyControllers', [])

storyControllers.controller('StoryListCtrl', ['$scope', 'Story',
  function ($scope, Story) {
    $scope.stories = Story.all();
  }]);

storyControllers.controller('StoryDetailsCtrl', 
  ['$scope', '$routeParams', 'Story',
  function ($scope, $routeParams, Story) {
    console.log($routeParams.storyId);

    if ($routeParams.storyId !== 'new'){
      
      $scope.story = Story.get({
        storyId: $routeParams.storyId
      });
    }
  }]);
