"use strict";


app.controller("secondctrl", function($scope, routeFactory){
    routeFactory.getBluegrass()
    .then(function(data){
        console.log("data is ", data);
        $scope.bluegrass= data;
        console.log("bluegrass info", $scope.bluegrass);
    });
    console.log("hello");
});
