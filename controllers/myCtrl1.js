(function() {
  var module = angular.module("myApp");
  var myCtrl1 = function($scope, getleavedata, $filter,ngNotify) {
    $scope.data = getleavedata.data;
    ngNotify.config({
      duration: 500
  });
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }




  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };
  $scope.open1 = function(){
    $scope.popup1.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
    $scope.dt1 = new Date(year, month, day);
  };



  $scope.popup2 = {
    opened: false
  };
  $scope.popup1 = {
    opened: false
  };



  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

    $scope.addNewLeave = function() {
      var dateasstringfrom = $filter('date')($scope.dt, "dd/MM/yy");
      var dateasstringto = $filter('date')($scope.dt1, "dd/MM/yy");
      $scope.data.unshift({
        fullname: $scope.newname,
        leave_from: dateasstringfrom,
        leave_to: dateasstringto,
        reason: $scope.reason,
        type: "Leave"
      });

  $scope.newname="";
  $scope.dt="";
$scope.dt1="";
$scope.reason="";
};}
  module.controller("myCtrl1", myCtrl1);
}());
