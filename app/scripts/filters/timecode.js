'use strict';

/**
 * @ngdoc filter
 * @name bathmirrorApp.filter:timecode
 * @function
 * @description
 * # timecode
 * Filter in the bathmirrorApp.
 */
angular.module('bathmirrorApp')
  .filter('timecode', function () {
    return function(seconds) {
      seconds = Number.parseFloat(seconds);

      var wholeSeconds = Math.floor(seconds);
      var minutes = Math.floor(wholeSeconds / 60);

      var remainingSeconds = wholeSeconds % 60;

      var output = minutes + ':';

      if(remainingSeconds < 10) {
        output += '0';
      }

      output += remainingSeconds;

      return output;
    };
  });
