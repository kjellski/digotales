'use strict';

describe('Service: AssetCategory', function () {

  // load the service's module
  beforeEach(module('digotalesApp'));

  // instantiate service
  var AssetCategory;
  beforeEach(inject(function (_AssetCategory_) {
    AssetCategory = _AssetCategory_;
  }));

  it('should do something', function () {
    expect(!!AssetCategory).toBe(true);
  });

});
