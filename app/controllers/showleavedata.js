(function() {
  var module = angular.module("myApp");
  var showleavedata = function($scope, data) {
    $scope.data = data.getleave();
    $scope.result="";
    $scope.count=0;
    $scope.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'fullname',
      cellEditableCondition: true,
      width: 150
    }, {
      name: 'leave_from',
      cellEditableCondition: true
    }, {
      name: 'leave_to',
      cellEditableCondition: true
    }, {
      name: 'reason',
      cellEditableCondition: true
    }, {
      name: 'Action',
      cellEditableCondition: false,
      cellTemplate: `<div>
        <button type="button" class=" leave btn btn-success btn-xs" ng-click="showme=true; count=1 " ng-hide=showme>Accept</button>
        <button type="button" class=" leave btn btn-danger btn-xs" ng-click="showme=true; count=2" ng-hide=showme>Reject</button>
      </div>`,
      width:200
    }, {
      name: 'Status',
      cellEditableCondition: false,
      cellTemplate: `<div>{{grid.appScope.count}}</div>`
    }];
    }
  module.controller("showleavedata", showleavedata);
}());
