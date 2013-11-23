'use strict';

describe('Directive: assets', function () {

  // load the directive's module
  beforeEach(module('digotalesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<assets></assets>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the assets directive');
  }));
});
