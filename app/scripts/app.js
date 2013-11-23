'use strict';

angular.module('digotalesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'filters',
  'canvasDirectives',
  'assetCategoryServices',
  'imageDropServices',
  'storyServices',
  'storyControllers',
  'canvasControllers'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/story', {
      templateUrl: 'views/story/story-list.html',
      controller: 'StoryListCtrl'
    })
    .when('/story/show/:storyTitle', {
      templateUrl: 'views/story/story-details.html',
      controller: 'StoryDetailsCtrl'
    })
    .when('/story/new', {
      templateUrl: 'views/story/story-editor.html',
      controller: 'StoryEditorCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});