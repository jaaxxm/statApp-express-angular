'use strict';

/* Root Controllers */

angular.module('callStatApp').
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  });