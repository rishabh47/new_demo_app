(function() {
  var module = angular.module("myApp");
  var showroledata = function($scope, getroledata,ngNotify) {
    $scope.data = getroledata.data;
    $scope.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'username',
      cellEditableCondition: true
    }, {
      name: 'fullname',
      cellEditableCondition: true
    }, {
      name: 'role',
      cellEditableCondition: true
    }, {
      name: 'Action',
      cellEditableCondition: false,
      cellTemplate: 'button.html'

    }];

  }
  module.controller("showroledata", showroledata);
}());
