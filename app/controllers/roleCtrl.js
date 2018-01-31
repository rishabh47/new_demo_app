(function() {
  var module = angular.module("myApp");
  var roleCtrl = function($scope, data,$location,toastr) {

    $scope.simple = function(){
      toastr.success('Form Submitted Successfully');
      $location.path("/rolelist")
            };

    $scope.addNewRole = function() {
      $scope.data={
        roles: $scope.newrole,
        type: "Role"
      };
      data.setrole($scope.data);
    };
  }
  module.controller("roleCtrl", roleCtrl);
}());
