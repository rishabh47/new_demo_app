(function() {
  var module = angular.module("myApp");
  var showuserdata = function($scope, data, toastr,RowEditor,uiGridExporterService, uiGridExporterConstants) {
    var vm = this;
    vm.editRow = RowEditor.editRow;
    vm.gridOptions = {
      columnDefs: [{
        name: 'fullname',
        cellEditableCondition: true,
        width: 150
      }, {
        name: 'username',
        cellEditableCondition: true,
        width: 120
      }, {
        name: 'email',
        cellEditableCondition: true,
        width: 270
      }, {
        name: 'createdon',
        cellEditableCondition: false,
        width: 220
      }, {
        field: 'id',
        name: 'Action',
        cellEditableCondition: false,
        cellTemplate: '../templates/edit-button.html',
        width: 150
      }],enableGridMenu: false,
      enableFiltering: true,
    enableSelectAll: true,
    exporterCsvFilename: 'myFile.csv',
    exporterPdfDefaultStyle: {fontSize: 9},
    exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
    exporterPdfHeader: { text: "User Data", style: 'headerStyle' },
    exporterSuppressColumns: [ 'Action' ],
    exporterPdfFooter: function ( currentPage, pageCount ) {
      return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
    },
    exporterPdfCustomFormatter: function ( docDefinition ) {
      docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
      docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
      return docDefinition;
    },
    exporterPdfOrientation: 'portrait',
    exporterPdfPageSize: 'LETTER',
    exporterPdfMaxGridWidth: 500,
    exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
    onRegisterApi: function(gridApi){
      vm.gridApi = gridApi;
    }
  };
    vm.gridOptions.data = data.getuser();
    $scope.exportPdf = function() {
    var grid = vm.gridApi.grid;
    var rowTypes = uiGridExporterConstants.SELECTED;
    var colTypes = uiGridExporterConstants.ALL;
    uiGridExporterService.pdfExport(grid, rowTypes, colTypes);
  };
  $scope.downloaded = function() {
    toastr.success('File Downloaded Successfully');
  };
  $scope.exportcsv = function() {
  var grid = vm.gridApi.grid;
  var rowTypes = uiGridExporterConstants.SELECTED;
  var colTypes = uiGridExporterConstants.ALL;
  uiGridExporterService.csvExport(grid, rowTypes, colTypes);
};
  };
  module.controller("showuserdata", showuserdata);
}());
