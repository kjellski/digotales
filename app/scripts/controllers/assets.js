'use strict';

angular.module('digotalesApp')
  .controller('AssetsCtrl', function ($scope, $http) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1 asdas das dsda sd asd"
      },
      {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2 asd asd asd as dasd a sda"
      }
    ];

    $scope.isCollapsed = false;

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };    

    // $http.get('/api/assets').success(function(assets) {
    //   $scope.assets = assets;
    // });
  });
