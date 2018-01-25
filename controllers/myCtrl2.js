(function() {
  var module = angular.module("myApp");
  var myCtrl2 = function($scope, getroledata,ngNotify) {
    $scope.data = getroledata.data;

    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };

    $scope.addNewRole = function() {
      $scope.data.unshift({
        username: $scope.newusername,
        fullname: $scope.newfullname,
        role: $scope.newrole,
        type: "Role"
      });
      $scope.newfullname="";
      $scope.newusername="";
      $scope.newrole="";
    };
  }
  module.controller("myCtrl2", myCtrl2);
}());
