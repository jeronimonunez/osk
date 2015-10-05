'use strict';

/**
 * @ngdoc function
 * @name oskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oskApp
 */
angular.module('oskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
