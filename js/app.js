var app = angular.module('mantenimientoAutosApp',[ 'ngRoute', 'ui.mask' ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

    $scope.menuSuperior = 'parciales/menu.html';
  
    $scope.setActive = function(opcion){
        $scope.mInicio = "";
        $scope.mMarcas = "";
        $scope.mAutos = "";

        $scope[opcion] = "active";
    }

}]);