'use strict';

/**
 * @ngdoc function
 * @name bathmirrorApp.controller:NotificationCtrl
 * @description
 * # NotificationCtrl
 * Controller of the bathmirrorApp
 */
angular.module('bathmirrorApp')
  .controller('NotificationCtrl', ['$scope', '$location', '$stateParams', function ($scope, $location, $stateParams) {

    var showNotif = function(type){

      switch(type) {
        case 'bell':
          swal({title: 'Sonette', text: 'Quelqu\'un est à votre porte', timer: 4000, imageUrl: '../img/bell.png', showConfirmButton: false });
          break;
        case 'fireAlarm':
          swal({title: 'ALERTE INCENDIE', text: 'Dirigez-vous vers la sortie la plus proche !', timer: 10000, imageUrl: '../img/fire.png', showConfirmButton: false });
          break;
      }
    };

    showNotif($stateParams.type);
    $location.url('/');

  }]);
