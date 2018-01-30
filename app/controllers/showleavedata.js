(function() {
  var module = angular.module("myApp");
  var showleavedata = function($scope, data) {
    $scope.gridOptions={};
    $scope.a = function (row) {
      row.status = "Accepted";
    };
    $scope.b = function(row)
    {
      row.status = "Rejected";
    };
    $scope.gridOptions.onRegisterApi = function (gridApi) {
    $scope.gridApi = gridApi;}

    $scope.gridOptions.columnDefs = [{
      name: 'sno',
      displayName:'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'fullname',
      width: 150
    }, {
      name: 'leave_from',
    }, {
      name: 'leave_to',
    }, {
      name: 'reason',
    },{ name:'status'

    }, {
      name: 'Action',
      cellTemplate: `<div ng-if="row.entity.status===undefined">
        <button type="button" class=" leave btn btn-success btn-xs" ng-click="showme=true; grid.appScope.a(row.entity)  " ng-hide=showme>Accept</button>
        <button type="button" class=" leave btn btn-danger btn-xs" ng-click="showme=true;  grid.appScope.b(row.entity)" ng-hide=showme>Reject</button>
      </div>`,
      width:200
    }];
    $scope.gridOptions.data = data.getleave();

    }
  module.controller("showleavedata", showleavedata);
}());
