var storyServices = angular.module('storyServices', ['ngResource']);
 
storyServices.factory('Story', ['$resource',
  function($resource){
    return $resource('api/story/:storyId', {}, {
      all: {
        method:'GET', 
        isArray:true
      },
      findById: {
        method:'GET', 
        isArray: false,
        params : { storyId: ':storyId'}
      }
    });
  }]);
