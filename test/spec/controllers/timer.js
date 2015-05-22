'use strict';

describe('Controller: TimerCtrl', function () {

  // load the controller's module
  beforeEach(module('bathmirrorApp'));

  var TimerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimerCtrl = $controller('TimerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
