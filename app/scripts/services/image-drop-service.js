'use strict';
var imageDropServices = angular.module('imageDropServices', []);

imageDropServices.service('ImageDropService', function($rootScope) {
  var imageDropService = {};
  
  imageDropService.droppingImage = undefined;

  imageDropService.prepareDropImage = function(droppingImage) {
    console.log('dropping');
    this.droppingImage = droppingImage;
    this.dropImage();
  };

  imageDropService.dropImage = function() {
    $rootScope.$emit('dropImage');
  };

  return imageDropService;
});