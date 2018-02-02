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

    $scope.gridOptions={
      paginationPageSizes: [2,4,6,8,10],
      columnDefs: [{
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
        <button type="button" class="btn leave btn-info btn-xs" ng-click="showme=true; grid.appScope.a(row.entity)" ng-hide="showme">Activate</button>
        <button type="button" class="btn leave btn-warning btn-xs" ng-click="showme=true; grid.appScope.b(row.entity)" ng-hide="showme">Deactivate</button>
      </div>
`,
      width: 200
    }],rowTemplate: '<div ng-class="grid.appScope.rowColor(row, grid)">' +
            '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
        '</div>',enableFiltering: true
  };
    $scope.gridOptions.data = data.getrole();
    $scope.rowColor = function(row, grid) {
        var idx = grid.renderContainers.body.visibleRowCache.indexOf(row)
        return idx % 2 === 0 ? 'is-even' : 'is-odd';
    };

  }
  module.controller("showroledata", showroledata);
}());
