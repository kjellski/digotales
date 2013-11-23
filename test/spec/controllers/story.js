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
      .expectGET('/api/stories')
      .respond(fixture);
    scope = $rootScope.$new();
    StoryListCtrl = $controller('StoryListCtrl', {
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

describe('Controller: StoryDetailsCtrl', function () {
  // load the controller's module
  beforeEach(module('digotalesApp'));

  var StoryDetailsCtrl,
    scope,
    routeParams,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/stories/0').respond(fixture[0]);

    scope = $rootScope.$new();
    routeParams = { storyId: 0 };

    StoryDetailsCtrl = $controller('StoryDetailsCtrl', {
      $scope: scope,
      $routeParams : routeParams
    });
  }));

  it('should have a routeParams.storyId defined', function () {
    expect(routeParams.storyId).toBeDefined();        
  });

  it('should attach a story to the scope', function () {
    expect(scope.story).toBeUndefined();
    $httpBackend.flush();
    expect(scope.story).toBeDefined();
    expect(scope.story.title).toBeDefined();
    expect(scope.story.author).toBeDefined();
    expect(scope.story.scenes).toBeDefined();
  });
});

var fixture = [
  {
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
  }
];