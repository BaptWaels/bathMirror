'use strict';

/**
 * @ngdoc function
 * @name bathmirrorApp.controller:TimerCtrl
 * @description
 * # TimerCtrl
 * Controller of the bathmirrorApp
 */
angular.module('bathmirrorApp')
  .controller('TimerCtrl', ['$scope', '$interval', '$timeout', '$location', function($scope, $interval, $timeout, $location) {
    $scope.defaultTime = 120;
    $scope.timeLeft = $scope.defaultTime;

    $scope.startTime = function(timeInSecond) {
      if(timeInSecond !== undefined){
        $scope.timeLeft = timeInSecond;
      }

      $scope.disabled = true;

      $scope.time = $interval(function() {
        $scope.timeLeft--;
        if($scope.timeLeft <= 0) {
          $scope.disabled = true;
          $scope.stopTime();
          $scope.ring();
        }
      }, 1000);
    };

    $scope.ring = function(){
      var container = $('.timerContainer');
      var nb = 5;

      var myInterval = $interval(function(){
        nb--;
        if(nb <= 0){
          $interval.cancel(myInterval);
          $scope.hideTime();
        }
        container.css('background-color', 'black');
        $timeout(function(){
          container.css('background-color', '#3E46C3');
        }, 500);
      }, 1000);

    };

    $scope.stopTime = function() {
      $scope.disabled = false;
      $interval.cancel($scope.time);
    };

    $scope.resetTime = function() {
      $scope.disabled = false;

      $scope.timeLeft = $scope.defaultTime;
    };

    $scope.hideTime = function () {
      $location.path('/');
    };

    $scope.startTime();

  }]);
