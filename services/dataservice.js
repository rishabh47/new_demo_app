(function() {
var data = function(){
var update=[];
var user=[];
var leave=[];
var role=[];

this. setleave = function(object){
  leave.push(object);
  update.unshift(object);
}
this. setuser = function(object){
  user.push(object);
  update.unshift(object);
}
this. setrole = function(object){
  role.push(object);
  update.unshift(object);
}
this. getleave = function(){
  return leave;
}
this. getuser = function(){
  return user;
}
this. getrole = function(){
  return role;
}
this. getupdate = function(){
  return update;
}
};


  var module = angular.module("myApp");
  module.service('data', data);
}());
