'use strict';

/* Main Stat Controllers */

angular.module('statApp', []).
  controller('StatCtrl', function ($scope, $http, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });

    $scope.showCircles = true;
    $scope.showSquares = true;
    $scope.circles = [];
    $scope.squares = [];
    $scope.circleRenderer = function(el, data) {
      // Set the data for some circles
      var d = el.selectAll('circle').data($scope.circles);
      d.enter()
      .append('circle')
      .attr('cx', 1000 / 2)
      .attr('cy', 500 / 2)
      .style('fill', function() {
        return 'rgb(' + parseInt(Math.random() * 255) + ','
          + parseInt(Math.random() * 255) + ','
          + parseInt(Math.random() * 255) + ')';
      })
      .transition().duration(1000)
      .attr('cx', function(d) {
        return d.cx;
      }).attr('cy', function(d) {
        return d.cy;
      }).attr('r', function(d) {
        return d.r;
      });
      d.exit()
      .transition().duration(1000)
      .attr('cx', 1000 / 2)
      .attr('cy', 500 / 2)
      .attr('r', 0)
      .remove();
    };
    $scope.addCircles = function() {
      for (var i = 0; i < 10; i++) {
        $scope.circles.push({
          cx: Math.random() * 1000,
          cy: Math.random() * 500,
          r: Math.random() * 50
        });
      }
    };
    $scope.clearCircles = function() {
      $scope.circles = [];
    };
    $scope.toggleCircleVisibility = function() {
      $scope.showCircles = !$scope.showCircles;
    };
    $scope.squareRenderer = function(el, data) {
      // Set the data for some circles
      var d = el.selectAll('rect').data($scope.squares);
      d.enter()
      .append('rect')
      .attr('x', 1000 / 2)
      .attr('y', 500 / 2)
      .attr('width', 0)
      .attr('height', 0)
      .style('fill', function() {
        return 'rgb(' + parseInt(Math.random() * 255) + ','
          + parseInt(Math.random() * 255) + ','
          + parseInt(Math.random() * 255) + ')';
      })
      .transition().duration(1000)
      .attr('x', function(d) {
        return d.x - d.size / 2;
      }).attr('y', function(d) {
        return d.y - d.size / 2;
      }).attr('width', function(d) {
        return d.size;
      }).attr('height', function(d) {
        return d.size;
      });
      d.exit()
      .transition().duration(1000)
      .attr('x', 1000 / 2)
      .attr('y', 500 / 2)
      .attr('width', 0)
      .attr('height', 0)
      .remove();
    };
    $scope.addSquares = function() {
      for (var i = 0; i < 10; i++) {
        $scope.squares.push({
          x: Math.random() * 1000,
          y: Math.random() * 500,
          size: Math.random() * 50
        });
      }
    };
    $scope.clearSquares = function() {
      $scope.squares = [];
    };
    $scope.toggleSquareVisibility = function() {
      $scope.showSquares = !$scope.showSquares;
    };

    $http.get("/api/mainStat").success(function(data){
      $scope.MainStat = data;
    }); 

    $scope.gridOptions = {
      data: 'MainStat',
      enablePinning: false,
       columnDefs: [{ field: "city"},
                    { field: "all-calls", width: 150}]
    };    
  });