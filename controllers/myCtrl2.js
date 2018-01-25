(function() {
  var module = angular.module("myApp");
  var myCtrl2 = function($scope, getroledata,ngNotify) {
    $scope.data = getroledata.data;
    ngNotify.config({
      duration: 500
  });
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };

    $scope.addNewRole = function() {
      $scope.data.unshift({
        roles: $scope.newrole,
        type: "Role"
      });
      $scope.newrole="";
    };
  }
  module.controller("myCtrl2", myCtrl2);
}());
