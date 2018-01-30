(function() {
  var module = angular.module("myApp");
  var userCtrl = function($scope,data,ngNotify) {
    ngNotify.config({
      duration: 500
  });

      $scope.role = [
          {value: '', displayName: 'Select a Value'},
          {value: 'Designer', displayName: 'Designer'},
          {value: 'Programmer', displayName: 'Programmer'},
          {value: 'Architect', displayName: 'Architect'}
       ];
       $scope.supervisor = [
         {value: '', displayName: 'Select a Value'},
         {value: 'Manager', displayName: "Manager"},
         {value: 'Team Lead', displayName: 'Team Lead'},
         {value: 'HR', displayName: 'HR'}
       ];
       $scope.today = function() {
     $scope.dt = new Date();
     };
     $scope.today();

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
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };
    $scope.addNewItem = function() {
      $scope.data={
        fullname: $scope.newname,
        username: $scope.newusername,
        email: $scope.newemail,
        createdon: moment().format('LLL'),
        type: "User"
      };
      data.setuser($scope.data);
      $scope.data=[];
    };
  }
  module.controller("userCtrl", userCtrl);
  module.directive('wjValidationError', function () {
    return {
      require: 'ngModel',
      link: function (scope, elm, attrs, ctl) {
        scope.$watch(attrs['wjValidationError'], function (errorMsg) {
          elm[0].setCustomValidity(errorMsg);
          ctl.$setValidity('wjValidationError', errorMsg ? false : true);
        });
      }
    };
  });


}());
