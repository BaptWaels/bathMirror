'use strict';

describe('Filter: timecode', function () {

  // load the filter's module
  beforeEach(module('bathmirrorApp'));

  // initialize a new instance of the filter before each test
  var timecode;
  beforeEach(inject(function ($filter) {
    timecode = $filter('timecode');
  }));

  it('should return the input prefixed with "timecode filter:"', function () {
    var text = 'angularjs';
    expect(timecode(text)).toBe('timecode filter: ' + text);
  });

});
