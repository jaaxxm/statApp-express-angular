'use strict';

/* Filters */

angular.module('callStatApp').
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  });
