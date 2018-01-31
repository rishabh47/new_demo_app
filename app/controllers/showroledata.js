(function() {
  var module = angular.module("myApp");
  var showroledata = function($scope, data) {
    $scope.gridOptions = {};
    $scope.a = function(row) {
      row.status = "Activated";
    };
    $scope.b = function(row) {
      row.status = "Deactivated";
    };
    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    }

    $scope.gridOptions.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'roles',
      cellEditableCondition: true,
      width: 450
    }, {
      name: 'status'

    }, {
      name: 'Action',
      cellEditableCondition: false,
      cellTemplate: `<div class='btnns' ng-if="row.entity.status===undefined">
        <button type="button" class="btn btn-info btn-xs" ng-click="showme=true; grid.appScope.a(row.entity)" ng-hide="showme">Activate</button>
        <button type="button" class="btn btn-warning btn-xs" ng-click="showme=true; grid.appScope.b(row.entity)" ng-hide="showme">Deactivate</button>
      </div>
`,
      width: 200
    }];
    $scope.gridOptions.data = data.getrole();

  }
  module.controller("showroledata", showroledata);
}());
