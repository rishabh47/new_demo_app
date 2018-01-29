(function() {
  var module = angular.module("myApp");
  var showleavedata = function($scope, data) {
    $scope.data = data.getleave();
    // $scope.val = true;
    //     $scope.result = "rejected";
    //     $scope.showme = function(row) {
    //       $scope.val = !$scope.val;
    //       if (!$scope.val) {
    //         $scope.result = "accepted";
    //         return $scope.result;
    //       } else {
    //         $scope.result = "rejected";
    //         return $scope.result;
    //       }
    //     };
    $scope.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'fullname',
      cellEditableCondition: true,
      width: 150
    }, {
      name: 'Status',
      cellEditableCondition: false,
      cellTemplate: `<div></div>`
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
      cellTemplate: `<div ng-controller="showleavedata">
        <button type="button" class=" leave btn btn-success btn-xs" ng-click="showme=true " ng-hide=showme>Accepted</button>
        <button type="button" class=" leave btn btn-danger btn-xs" ng-click="showme=true " ng-hide=showme>Rejected</button>
      </div>`,
      width:200
    }];
    }
  module.controller("showleavedata", showleavedata);
}());
