'use strict';

describe('Service: ImageDropService', function () {

  // load the service's module
  beforeEach(module('digotalesApp'));

  // instantiate service
  var ImageDropService;
  beforeEach(inject(function (_ImageDropService_) {
    ImageDropService = _ImageDropService_;
  }));

  it('should do something', function () {
    expect(!!ImageDropService).toBe(true);
  });

});
