(function() {
  'use strict';
  var getuserdata = function() {
    this.data = [];
  };
  var module = angular.module("myApp");
  module.service('getuserdata', getuserdata);
}());
