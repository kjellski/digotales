'use strict';

angular.module('digotalesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'storyControllers'
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/stories', {
        templateUrl: 'views/stories/index.html',
        controller: 'StoryListCtrl'
      })
      .when('/stories/:storyId', {
        templateUrl: 'views/stories/story.html',
        controller: 'StoryDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/stories'
      });
  });

