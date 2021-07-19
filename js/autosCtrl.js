app.controller('autosCtrl', ['$scope','$http', function($scope,$http){

    $scope.setActive("mAutos");

    $scope.autos = {};
    $scope.posicion = 5;

    $http.get('php/servicios/autos.listado.php').then(function(data){
        $scope.autos = data.data;
    });

    $scope.siguientes = function(){
        if( $scope.autos.length > $scope.posicion ){
            $scope.posicion += 5;
        }
    };

    $scope.anteriores = function(){
        if( $scope.posicion > 5 ){
            $scope.posicion -= 5;
        }
    };
    
}]);