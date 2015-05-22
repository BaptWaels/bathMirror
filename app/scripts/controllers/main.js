'use strict';

/**
 * @ngdoc function
 * @name bathmirrorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bathmirrorApp
 */
angular.module('bathmirrorApp')
  .controller('MainCtrl', ['$scope', '$location','$timeout', 'Firebase','$firebaseArray', 'firebaseUrl', '$interval', '$window', function ($scope, $location, $timeout, Firebase ,$firebaseArray, firebaseUrl, $interval, $window) {

    var editFeed = function(){
      $('.media-body p').remove();
      $('.media-body a').each(function(){
        $(this).replaceWith('<p>'+ $(this).text() +'</p>');
      });


      $('span>:contains(°):not(:contains(rain))').not('.ng-hide').each(function(){
        $(this).text(
          Math.round((($(this).text().replace('°','')-32)/1.8)*10)/10+'°'
        );
      });
    };

    $timeout(editFeed, 2000);

    $scope.init = function(){
      var ref = new Firebase(firebaseUrl);
      $scope.goTo = $firebaseArray(ref);

      $scope.goTo.$loaded()
        .then(function(goTo) {
          goTo.$watch(function(e){

            if(e.event === 'child_changed' && e.key === 'goTo'){
              var goToUrl = $scope.goTo.$getRecord((e.key)).$value;

              if(goToUrl !== $location.path()){
                $location.url(goToUrl);
              }
            }
          });
        });

    };

    $scope.init();
    $interval(function(){$window.location.reload();},600000)

  }]);
