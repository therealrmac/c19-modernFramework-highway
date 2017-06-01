"use strict";
console.log("testing 123");
app.controller("newctrl", function($scope, routeFactory){
    
    routeFactory.getMountain()
    .then(function(data){
        $scope.mountain= data;
        console.log("mountain info", $scope.mountain);
    });
});

