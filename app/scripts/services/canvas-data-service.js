'use strict';

var canvasDataServices = angular.module('CanvasDataServices', []);

canvasDataServices.service('CanvasDataService', ['$rootScope', '$q',
  function CanvasDataService($rootScope, $q) {
    var canvasDataService = {};

    canvasDataService.requestCanvasJSON = function() {
      this.deferred = $q.defer();
      $rootScope.$emit('requestCanvasJSON');
      return this.deferred.promise;
    };

    canvasDataService.responseCanvasJSON = function(canvasJSON) {
      this.deferred.resolve(canvasJSON);
    };

    return canvasDataService;
  }
]);