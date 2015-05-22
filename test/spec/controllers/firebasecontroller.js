'use strict';

describe('Controller: FirebasecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('bathmirrorApp'));

  var FirebasecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirebasecontrollerCtrl = $controller('FirebasecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
