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

var NewStory = function(){
  return {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true, unique: false },
    storyline: { type: String, required: false, unique: false },
    scenes: [ ]
  }
}

storyControllers.controller('StoryEditorCtrl', ['$scope', 'Story',
  function ($scope, Story) {
    console.log('Editor');
    $scope.story = NewStory();
  }]);

