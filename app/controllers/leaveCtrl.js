(function() {
  var module = angular.module("myApp");
  var leaveCtrl = function($scope, toastr,data, $filter,$location) {

    $scope.simple = function(){
                 toastr.success('Form Submitted Successfully');
                 $location.path("/leavelist")
            };


   $scope.clear = function () {
     $scope.dt = null;
   };

   $scope.toggleMin = function() {
     $scope.minDate = $scope.minDate ? null : new Date();
   };
   $scope.toggleMin();

   $scope.open = function($event) {
     $event.preventDefault();
     $event.stopPropagation();

     $scope.opened = true;
   };

   $scope.dateOptions = {
     formatYear: 'yy',
     startingDay: 1
   };


   $scope.clear1 = function () {
     $scope.dt1 = null;
   };

   $scope.open1 = function($event) {
     $event.preventDefault();
     $event.stopPropagation();

     $scope.opened1 = true;
   };

   $scope.dateOptions1 = {
     formatYear: 'yy',
     startingDay: 1
   };
    $scope.addNewLeave = function() {
      var dateasstringfrom = $filter('date')($scope.dt, "dd/MM/yy");
      var dateasstringto = $filter('date')($scope.dt1, "dd/MM/yy");
      $scope.data={
        fullname: $scope.newname,
        leave_from: dateasstringfrom,
        leave_to: dateasstringto,
        reason: $scope.reason,
        type: "Leave"
      };
      data.setleave($scope.data);
};
}
  module.controller("leaveCtrl", leaveCtrl);
}());
