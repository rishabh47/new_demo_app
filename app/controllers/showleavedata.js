(function() {
  var module = angular.module("myApp");
  var showleavedata = function($scope, data) {
    $scope.gridOptions = {};

    $scope.a = function(row) {
      row.status = "Accepted";
      console.log(row);
    };
    $scope.b = function(row) {
      row.status = "Rejected";
    };
    $scope.funclose = function(row){
       row.status=undefined;
    };
    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
    }

    $scope.gridOptions.columnDefs = [{
      name: 'sno',
      displayName: 'S.No.',
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
    }, {
      name: 'status'

    }, {
      name: 'Action',
      cellTemplate: `<div ng-if="row.entity.status===undefined">
        <button type="button" class=" leave btn btn-success btn-xs" ng-click="grid.appScope.a(row.entity)" data-backdrop="false" data-toggle="modal" data-target="#myModali">Accept</button>
        <button type="button" class=" leave btn btn-danger btn-xs" ng-click="grid.appScope.b(row.entity)" data-backdrop="false" data-toggle="modal" data-target="#myModali">Reject</button>
      </div>
      <div id="myModali" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" ng-click="grid.appScope.funclose(row.entity)" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to perform this action ?</p>
            </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary"  data-dismiss="modal">Sure</button>
              <button type="button" class="btn btn-default" ng-click="grid.appScope.funclose(row.entity)"  data-dismiss="modal" >Close</button>
          </div>
        </div>
      </div>
    </div>

    `,
      width: 200
    }];
    $scope.gridOptions.data = data.getleave();

  }
  module.controller("showleavedata", showleavedata);
}());
