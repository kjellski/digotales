'use strict';

angular.module('digotalesApp')
  .controller('AssetsCtrl', ['$scope', '$routeParams', 'Assets',
    function ($scope, $routeParams, Assets) {
      console.log($routeParams);
      // $http.get('/api/assets').success(function(assets) {
      //   $scope.assets = assets;
      // });
  }]);
