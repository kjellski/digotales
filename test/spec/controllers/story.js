'use strict';

describe('Controller: StoryListCtrl', function () {
  // load the controller's module
  beforeEach(module('digotalesApp'));

  var StoryListCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend
      .expectGET('/api/story')
      .respond(fixture);
    scope = $rootScope.$new();
    StoryListCtrl = $controller('StoryListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of stories to the scope', function () {
    // figure out how this works with services
  });
});

describe('Controller: StoryDetailsCtrl', function () {
  // load the controller's module
  beforeEach(module('digotalesApp'));

  var StoryDetailsCtrl,
    scope,
    routeParams,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    
    scope = $rootScope.$new();
    routeParams = { storyId: 0 };

    StoryDetailsCtrl = $controller('StoryDetailsCtrl', {
      $scope: scope,
      $routeParams : routeParams
    });
  }));

  it('should have a routeParams.storyId defined', function () {
    // figure out how this works with services
  });

  it('should attach a story to the scope', function () {
    // figure out how this works with services
  });
});