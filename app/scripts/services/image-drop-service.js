'use strict';
var imageDropServices = angular.module('imageDropServices', []);

imageDropServices.service('ImageDropService', function($rootScope) {
  var imageDropService = {};
  
  imageDropService.image = undefined;

  imageDropService.prepareDropImage = function(image) {
    this.image = image;
    this.dropImage();
  };

  imageDropService.dropImage = function() {
    $rootScope.$broadcast('dropImage');
  };

  return imageDropService;
});