'use strict';

var storyControllers = angular.module('storyControllers', [])

storyControllers.controller('StoryListCtrl', ['$scope', 'Story',
  function ($scope, Story) {
    $scope.stories = Story.all();
  }]);

storyControllers.controller('StoryDetailsCtrl', 
  ['$scope', '$routeParams', 'Story',
  function ($scope, $routeParams, Story) {
    
    if($routeParams.storyTitle !== 'new') {
      var story = Story.get({
        storyTitle: $routeParams.storyTitle
      });

      //console.log($routeParams.storyTitle, " --> ", story);
      $scope.story = story;  
    }
  }]);