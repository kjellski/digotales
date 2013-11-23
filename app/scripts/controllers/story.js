'use strict';

var storyControllers = angular.module('storyControllers', [])

storyControllers.controller('StoryListCtrl', ['$scope', 'Story',
  function ($scope, Story) {
    $scope.stories = Story.all();
  }]);

storyControllers.controller('StoryDetailsCtrl', 
  ['$scope', '$routeParams', 'Story',
  function ($scope, $routeParams, Story) {
    console.log('showing: ', $routeParams.storyTitle);
    if ($routeParams.storyTitle === 'new' || $routeParams.storyTitle === undefined) 
      return;

    var story = Story.get({
      storyTitle: $routeParams.storyTitle
    });

    //console.log($routeParams.storyTitle, " --> ", story);
    $scope.story = story;  
  }]);

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
var NewStory = function(){
  return {
    title: 'Shiny title for the story goes here!',
    author: 'you.',
    storyline: 'tell us something about the "red line" of your story!',
    scenes: [
      {
        title: 'New Scene',
        data: undefined
      }
    ]
  }
}

storyControllers.controller('StoryEditorCtrl', ['$scope', 'Story',
  function ($scope, Story) {
    $scope.story = NewStory();
  }]);

