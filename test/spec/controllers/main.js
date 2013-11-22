'use strict';
var fixture = [{
    title: 'My first Story',
    author: '@kjellski',
    scenes: [
      {
        title: 'Intro',
        data: undefined
      }, {
        title: 'The End',
        data: undefined
      }
    ]
  }, {
    title: 'Hotter Fuzzer',
    author: '@kjellski',
    scenes: [
      {
        title: 'Supercop from London',
        data: undefined
      }, {
        title: 'zombies',
        data: undefined
      }, {
        title: 'Sorry wrong film',
        data: undefined
      }
    ]
  }, {
    title: 'My SecondLife',
    author: '@kjellski',
    scenes: [
      {
        title: 'Starting',
        data: undefined
      }, {
        title: 'Uninstall',
        data: undefined
      }
    ]
  }];

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('digotalesApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend
      .expectGET('/api/stories')
      .respond(fixture);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of stories to the scope', function () {
    expect(scope.stories).toBeUndefined();
    $httpBackend.flush();
    expect(scope.stories).toBeDefined();
    expect(scope.stories.length).toBe(3);
  });
});
