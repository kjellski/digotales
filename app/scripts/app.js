'use strict';

angular.module('digotalesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'filters',
  'directives',
  'storyServices',
  'storyControllers'
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/story', {
        templateUrl: 'views/story/story-list.html',
        controller: 'StoryListCtrl'
      })
      .when('/story/:storyTitle', {
        templateUrl: 'views/story/story-details.html',
        controller: 'StoryDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

