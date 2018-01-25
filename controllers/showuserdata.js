(function() {
  var module = angular.module("myApp");
  var showuserdata = function($scope,getuserdata) {
    $scope.data=getuserdata.data;
    $scope.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'fullname',
      cellEditableCondition: true,
      width: 150
    }, {
      name: 'username',
      cellEditableCondition: true,
      width:120
    }, {
      name: 'email',
      cellEditableCondition: true,
      width: 200
    }, {
      name: 'createdon',
      cellEditableCondition: false,
      width: 220
    }, {
      name: 'Action',
      cellEditableCondition: false,
      cellTemplate: 'button.html',
      width: 150
    }];
  }
  module.controller("showuserdata", showuserdata);



}());
