(function() {
  var module = angular.module("myApp");
  var showuserdata = function($scope,data,RowEditor) {
    var vm = this;
    vm.editRow = RowEditor.editRow;
    vm.gridOptions = {
      columnDefs: [ {
        name: 'fullname',
        cellEditableCondition: true,
        width: 150
      }, {
        name: 'username',
        cellEditableCondition: true,
        width:120
      }, {
        name: 'email',
        cellEditableCondition: true,
        width: 200
      }, {
        name: 'createdon',
        cellEditableCondition: false,
        width: 220
      },  {
        field:'id',
        name: 'Action',
        cellEditableCondition: false,
        cellTemplate: '../templates/edit-button.html',
        width: 150
      }]
    };
    vm.gridOptions.data=data.getuser();
  };
  module.controller("showuserdata", showuserdata);



}());
