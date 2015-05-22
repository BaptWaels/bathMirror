'use strict';

/**
 * @ngdoc function
 * @name bathmirrorApp.controller:EphemerisCtrl
 * @description
 * # EphemerisCtrl
 * Controller of the bathmirrorApp
 */
angular.module('bathmirrorApp')
  .controller('EphemerisCtrl', function ($scope) {
    $scope.todayEphemeris = ephemeris.getTodayEphemeris(); // jshint ignore:line
  });
