'use strict';

describe('Directive: holder', function () {

  // load the directive's module
  beforeEach(module('digotalesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    // scope = $rootScope.$new();
    // element = angular.element('<img data-src="holder.js/64x64" ng-holder />');
    // $compile(element)(scope);
  }));

  it('should fill element src with holder data', function () {
    // expect(element.src).toBeUndefined(); // scope starts undefined
    // expect(element.src).toBeDefined();
  });
});
