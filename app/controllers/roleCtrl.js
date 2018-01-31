(function() {
  var module = angular.module("myApp");
  var roleCtrl = function($scope, data, $location, toastr) {

    $scope.simple = function() {
      toastr.success('Role Added Successfully');
      $location.path("/rolelist")
    };

    $scope.addNewRole = function() {
      $scope.data = {
        roles: $scope.newrole,
        type: "Role"
      };
      data.setrole($scope.data);
    };
  }
  module.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      timeOut: 1500
    });
  });
  module.controller("roleCtrl", roleCtrl);
}());
