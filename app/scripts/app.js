'use strict';

/**
 * @ngdoc overview
 * @name bathmirrorApp
 * @description
 * # bathmirrorApp
 *
 * Main module of the application.
 */
angular
  .module('bathmirrorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'weatherModule',
    'ds.clock',
    'feeds',
    'plangular',
    'oitozero.ngSweetAlert',
    'firebase'
  ])

  .value('firebaseUrl', 'https://bathmirror.firebaseio.com/')

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home',{
        url: '/',
        views:{
          '' : {
            templateUrl: 'views/main.html',
            controller : 'MainCtrl'
          },
          'news@home' : {
            templateUrl : 'templates/news.tpl.html'
          }
        }
      })

      .state('home.timer',{
        url : 'showTimer',
        views : {
           'timer' : {
             templateUrl : 'templates/timer.tpl.html'
           }
        }
      })

      .state('home.player',{
        url: 'showPlayer',
        views : {
          'player' : {
            templateUrl: 'templates/player.tpl.html'
          }
        }
      })

      .state('home.notif',{
        url : 'showNotif?type',
        views:{
          'randomUiView':{
            template: ' ',
            controller: 'NotificationCtrl'
          }
        }
      });


  })

  .config(function(plangularConfigProvider){
    plangularConfigProvider.clientId = 'b6e6d860da5d8c51b280570daff42907';
  });
