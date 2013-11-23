'use strict';

describe('Controller: AssetCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('digotalesApp'));

  var AssetCategoryCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/asset-category')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);    
    scope = $rootScope.$new();
    AssetCategoryCtrl = $controller('AssetCategoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of assetCategories to the scope', function () {
    // figure out how this works with services
  });
});
