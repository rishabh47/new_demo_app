(function() {
  'use strict';
  var getleavedata = function() {
    this.data = [];
  };
  var module = angular.module("myApp");
  module.service('getleavedata', getleavedata);
}());
