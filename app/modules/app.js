var app = angular.module('myApp', ["ui.router", "ui.grid", 'ngNotify','ui.bootstrap','schemaForm']);
// routes
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
      url: '/dashboard',
      templateUrl: '../templates/main.html',
      controller:"mainCtrl"
    })
    .state('userlist', {
        url: '/userlist',
        templateUrl: '../templates/userlisting.html',
        controller:"showuserdata"
      })
    .state("adduser", {
      url: '/adduser',
      templateUrl: "../templates/adduser.html",
      controller: "userCtrl"
    })
    .state("applyleave", {
      url: '/applyleave',
      templateUrl: "../templates/appleave.html",
      controller: "leaveCtrl"
    })
    .state("leavelist", {
      url: '/leavelist',
      templateUrl: "../templates/leavelist.html",
      controller: "showleavedata"
    })
    .state("addrole", {
      url: '/addrole',
      templateUrl: "../templates/addrole.html",
      controller: "roleCtrl"
    })
    .state("rolelist", {
      url: '/rolelist',
      templateUrl: "../templates/rolelist.html",
      controller: "showroledata"
    })
    $urlRouterProvider.otherwise("/dashboard");
});
