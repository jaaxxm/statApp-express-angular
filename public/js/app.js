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
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
