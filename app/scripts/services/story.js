var storyServices = angular.module('storyServices', ['ngResource']);
 
storyServices.factory('Story', ['$resource',
  function($resource){
    return $resource('api/story/:storyTitle', {}, {
      all: {
        method:'GET', 
        isArray:true
      },
      findById: {
        method:'GET', 
        isArray: false,
        params : { storyTitle: ':storyTitle'}
      }
    });
  }]);
