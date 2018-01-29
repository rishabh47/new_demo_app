(function() {
  var module = angular.module("myApp");
  var roleCtrl = function($scope, data,ngNotify) {
    ngNotify.config({
      duration: 500
  });
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };

    $scope.addNewRole = function() {
      $scope.data={
        roles: $scope.newrole,
        type: "Role"
      };
      data.setrole($scope.data);
      $scope.data=[];
    };
  }
  module.controller("roleCtrl", roleCtrl);
}());
