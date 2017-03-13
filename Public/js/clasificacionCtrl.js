/**
 * Created by Ruben on 13/03/2017.
 */
var myApp = angular.module('angularRoutingApp');

myApp.controller('clasificacionCtrl', ['$scope','$http', function ($scope, $http){

    $scope.loadClasificacion = function () {

        console.log("loadClassifications!!!!!!!!!")
        var positions = [];
        positions.push({"name":"Ruben", "puntos":200});
        positions.push({"name":"Toni", "puntos":50});
        positions.push({"name":"Toni", "puntos":50});
        positions.push({"name":"Toni", "puntos":50});
        positions.push({"name":"Toni", "puntos":50});
        positions.push({"name":"Juan", "puntos":50});
        positions.push({"name":"Toni", "puntos":50});
        positions.push({"name":"Toni", "puntos":50});
        $scope.clasificacion = positions;

    }


}]);



