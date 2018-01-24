var app = angular.module('myApp', ["ui.router", "ngTouch", "ui.grid", "ui.grid.edit",'ngNotify']);
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
        controller:"myCtrl"
      })
    .state("adduser", {
      url: '/adduser',
      templateUrl: "adduser.html",
      controller: "myCtrl"
    })
    .state("applyleave", {
      url: '/applyleave',
      templateUrl: "appleave.html",
      controller: "myCtrl1"
    })
    .state("leavelist", {
      url: '/leavelist',
      templateUrl: "leavelist.html",
      controller: "myCtrl1"
    })
    .state("addrole", {
      url: '/addrole',
      templateUrl: "addrole.html",
      controller: "myCtrl2"
    })
    .state("rolelist", {
      url: '/rolelist',
      templateUrl: "rolelist.html",
      controller: "myCtrl2"
    })
    $urlRouterProvider.otherwise("/dashboard");
});
