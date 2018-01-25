(function() {
  var module = angular.module("myApp");
  var mainCtrl = function($scope, getuserdata, getroledata, getleavedata) {
    $scope.userdata = getuserdata.data;
    $scope.leavedata = getleavedata.data;
    $scope.roledata = getroledata.data;
  };
  module.controller("mainCtrl", mainCtrl);
}());
