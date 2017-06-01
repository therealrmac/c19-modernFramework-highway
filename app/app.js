"use strict";

var app= angular.module("highwayApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.
    when("/mtnprkway",{
        templateUrl: "partials/mtnPrkway.html",
        controller:  "newctrl"
    }).
    when("/bluegrass",{
        templateUrl: "partials/blueGrassprkway.html",
        controller:  "secondctrl"
    }).
    otherwise("/");
});


