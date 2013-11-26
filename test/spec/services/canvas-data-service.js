'use strict';

describe('Service: CanvasDataService', function () {

  // load the service's module
  beforeEach(module('digotalesApp'));

  // instantiate service
  var CanvasDataService;
  beforeEach(inject(function (_CanvasDataService_) {
    CanvasDataService = _CanvasDataService_;
  }));

  it('should do something', function () {
    expect(!!CanvasDataService).toBe(true);
  });

});
