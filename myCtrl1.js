(function() {
  var module = angular.module("myApp");
  var myCtrl1 = function($scope, getleavedata, $filter,ngNotify) {
    $scope.data = getleavedata.data;

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
      cellTemplate: `<div ng-controller="myCtrl5">{{result}}<div>`
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
      cellTemplate: `buttonleave.html`
    }];
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };

    $scope.addNewLeave = function() {
      var dateasstringfrom = $filter('date')($scope.leavefrom, "dd/MM/yy");
      var dateasstringto = $filter('date')($scope.leaveto, "dd/MM/yy");
      $scope.data.unshift({
        fullname: $scope.newname,
        leave_from: dateasstringfrom,
        leave_to: dateasstringto,
        reason: $scope.reason,
        type: "Leave"
      });

  $scope.newname="";
  $scope.leavefrom="";
$scope.leaveto="";
$scope.reason="";
};}
  module.controller("myCtrl1", myCtrl1);
}());
