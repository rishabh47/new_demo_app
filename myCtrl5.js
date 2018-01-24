(function() {
  var module = angular.module("myApp");
  var myCtrl5 = function($scope) {
    $scope.val = true;
    $scope.result = "rejected";
    $scope.showme = function() {
      $scope.val = !$scope.val;
      if (!$scope.val) {
        $scope.result = "accepted";
      } else {
        $scope.result = "rejected";
      }
    };
  }
  module.controller("myCtrl5", myCtrl5);
}());
