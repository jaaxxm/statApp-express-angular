'use strict';

/* Controllers */

angular.module('roiApp').
  controller('RoiCtrl', function ($scope) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
  });