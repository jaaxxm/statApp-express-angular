'use strict';

// Declare app level module which depends on filters, and services

angular.module('statApp', [
  'statApp.controllers',
  'statApp.filters',
  'statApp.services',
  'statApp.directives',

  // 3rd party dependencies
  'btford.socket-io',
  'ui.bootstrap', 
  'ui.filters', 
  'ngGrid', 
  'd3'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/stat', {
      templateUrl: 'partials/stat',
      controller: 'StatCtrl'
    }).
    when('/call-log', {
      templateUrl: 'partials/call-log',
      controller: 'LogCtrl'
    }).
    when('/call-daily', {
      templateUrl: 'partials/call-daily',
      controller: 'DailyCtrl'
    }).
    when('/roi', {
      templateUrl: 'partials/roi',
      controller: 'RoiCtrl'
    }).
    otherwise({
      redirectTo: '/stat'
    });

  $locationProvider.html5Mode(true);
});
