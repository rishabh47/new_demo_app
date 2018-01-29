var app = angular.module('myApp', ["ui.router", "ui.grid", "ui.grid.edit",'ngNotify','ui.bootstrap','schemaForm']);
// routes
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
      url: '/dashboard',
      templateUrl: 'main.html',
      controller:"mainCtrl"
    })
    .state('userlist', {
        url: '/userlist',
        templateUrl: 'userlisting.html',
        controller:"showuserdata"
      })
    .state("adduser", {
      url: '/adduser',
      templateUrl: "adduser.html",
      controller: "userCtrl"
    })
    .state("applyleave", {
      url: '/applyleave',
      templateUrl: "appleave.html",
      controller: "leaveCtrl"
    })
    .state("leavelist", {
      url: '/leavelist',
      templateUrl: "leavelist.html",
      controller: "showleavedata"
    })
    .state("addrole", {
      url: '/addrole',
      templateUrl: "addrole.html",
      controller: "roleCtrl"
    })
    .state("rolelist", {
      url: '/rolelist',
      templateUrl: "rolelist.html",
      controller: "showroledata"
    })
    $urlRouterProvider.otherwise("/dashboard");
});
