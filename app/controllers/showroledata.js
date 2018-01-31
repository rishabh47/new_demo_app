(function() {
  var module = angular.module("myApp");
  var showroledata = function($scope, data) {
    $scope.data = data.getrole();
    $scope.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'roles',
      cellEditableCondition: true,
      width : 250
    }, {
      name: 'Action',
      cellEditableCondition: false,
      cellTemplate: `<div class='btnns'>
        <button type="button" class="btn btn-info btn-xs" ng-click="showme=false" ng-show="showme">Activate</button>
        <button type="button" class="btn btn-warning btn-xs" ng-click="showme=true" ng-hide="showme">Deactivate</button>
      </div>
`,
width:100
    }];

  }
  module.controller("showroledata", showroledata);
}());
