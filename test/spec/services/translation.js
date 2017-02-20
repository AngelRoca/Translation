'use strict';

describe('Service: Translation', function () {

  // load the service's module
  beforeEach(module('translateApp'));

  // instantiate service
  var Translation;
  beforeEach(inject(function (_Translation_) {
    Translation = _Translation_;
  }));

  it('should do something', function () {
    expect(!!Translation).toBe(true);
  });

});
