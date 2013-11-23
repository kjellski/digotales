'use strict';

angular.module('digotalesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'storyServices',
  'storyControllers'
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/stories', {
        templateUrl: 'views/stories/story-list.html',
        controller: 'StoryListCtrl'
      })
      .when('/stories/:storyId', {
        templateUrl: 'views/stories/story-details.html',
        controller: 'StoryDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/stories'
      });
  });

