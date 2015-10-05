'use strict';

/**
 * @ngdoc overview
 * @name oskApp
 * @description
 * # oskApp
 *
 * Main module of the application.
 */
angular
  .module('oskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
