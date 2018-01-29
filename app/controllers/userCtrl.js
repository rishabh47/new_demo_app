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

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();



  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
    $scope.dt1 = new Date(year, month, day);
  };



  $scope.popup2 = {
    opened: false
  };


  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

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
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };
            $scope.updatedon = function() {
              return moment().format('LLL');
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
