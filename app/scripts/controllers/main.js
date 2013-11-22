'use strict';

angular.module('digotalesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  })
  .controller('StoryCtrl', function ($scope, $http) {
    $http.get('/api/story').success(function(story) {
      $scope.story = story;
    });
  });
