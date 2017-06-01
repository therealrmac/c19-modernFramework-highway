"use strict";

app.factory("routeFactory", function($q, $http){
    let getBluegrass= ()=>{
        return $q((resolve,reject)=>{
            $http.get("./data/bluegrassprkway.json")
            .then((obj)=>{
                let y= obj.data;
                console.log("y is",y);
                resolve(y.bluegrass);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    let getMountain= ()=>{
        return $q((resolve,reject)=>{
            $http.get("./data/mtnprkway.json")
            .then((obj)=>{
                let x= obj.data;
                console.log("x is", x);
                resolve(x.mountain);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getMountain, getBluegrass};
});

