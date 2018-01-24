(function() {
  var module = angular.module("myApp");
  var myCtrl = function($scope, getuserdata,ngNotify) {
    $scope.data = getuserdata.data;
    $scope.columnDefs = [{
      name: 'S.No.',
      cellTemplate: '<div>{{rowRenderIndex + 1}} </div>',
      width: 60
    }, {
      name: 'fullname',
      cellEditableCondition: true
    }, {
      name: 'username',
      cellEditableCondition: true
    }, {
      name: 'email',
      cellEditableCondition: true
    }, {
      name: 'createdon',
      cellEditableCondition: true
    }, {
      name: 'Action',
      cellEditableCondition: false,
      cellTemplate: 'button.html'
    }];
    $scope.simple = function(){
                ngNotify.set('Form successfully submitted','success');
            };
    $scope.addNewItem = function() {
      $scope.data.unshift({
        fullname: $scope.newname,
        username: $scope.newusername,
        email: $scope.newemail,
        createdon: getuserdata.gettime(),
        type: "User"
      });
      $scope.newname="";
      $scope.newusername="";
      $scope.newemail="";
      $scope.thePwd="";
      $scope.chkPwd="";
      $scope.date="";
      $scope.role="";
      $scope.supervisor="";
    };
  }
  module.controller("myCtrl", myCtrl);
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
