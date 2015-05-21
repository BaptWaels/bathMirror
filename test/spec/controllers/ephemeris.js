'use strict';

describe('Controller: EphemerisCtrl', function () {

  // load the controller's module
  beforeEach(module('bathmirrorApp'));

  var EphemerisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EphemerisCtrl = $controller('EphemerisCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
