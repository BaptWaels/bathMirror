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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'weatherModule',
    'ds.clock'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
