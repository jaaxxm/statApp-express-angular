'use strict';
angular.module('statApp', []);
angular.module('logApp', []);
angular.module('dailyApp', []);
angular.module('roiApp', []);

// Declare app level module which depends on filters, and services

angular.module('callStatApp', [
  'statApp',
  'logApp',
  'dailyApp',
  'roiApp',
  'statApp.directives',
  'statApp.filters',
  'statApp.services',
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
      action: 'statApp.StatCtrl'
    }).
    when('/call-log', {
      templateUrl: 'partials/call-log',
      action: 'logApp.CallLogCtrl'
    }).
    when('/call-daily', {
      templateUrl: 'partials/call-daily',
      action: 'dailyApp.CallDailyCtrl'
    }).
    when('/roi', {
      templateUrl: 'partials/roi',
      action: 'roiApp.RoiCtrl'
    }).
    otherwise({
      redirectTo: '/stat'
    });

  $locationProvider.html5Mode(true);
});
