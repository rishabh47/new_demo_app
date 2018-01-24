(function() {
  'use strict';
  var getroledata = function() {
    this.data = [{
      sno: 1,
      username: 'BoMar',
      fullname: 'John Doe',
      role: 'Designer',
      type: "Role"
    }];
  };
  var module = angular.module("myApp");
  module.service('getroledata', getroledata);
}());
