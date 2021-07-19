app.controller('autoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

    $scope.setActive("mAutos");

    var id = $routeParams.id;

    $scope.actualizado = false;
    $scope.auto = {};

    $scope.creando = false;

    if( id == "nuevo" ){

        $scope.creando = true;

    }else{

        $http.get('php/servicios/autos.getAuto.php?c=' + id).then(function(data){
    
            if( data.data.err !== undefined ) {
                window.location = "#!/autos";
                return;
            }
    
            $scope.auto = data.data;
            $scope.auto.ano = parseInt( $scope.auto.ano);
            $scope.auto.precio = parseFloat( $scope.auto.precio);
        });

    }



    $scope.guardarAuto = function() {

        console.log('guardarAuto()', $scope.auto);

        if($scope.creando) {

            $http.post('php/servicios/autos.crear.php', $scope.auto).then(function(data){
                console.log(data.data);
    
                if( data.data.err === false) {
    
                    $scope.actualizado = true;
    
                    setTimeout(function() {
                        $scope.actualizado = false;
                        $scope.$apply();
                    }, 3500);
                };
    
            });

        }else{

            // $scope.auto.ano = $scope.auto.ano.toString();
            // $scope.auto.precio = $scope.auto.precio.toString();

            $http.post('php/servicios/autos.guardar.php', $scope.auto).then(function(data){
                console.log(data.data);
    
                if( data.data.err === false) {
    
                    $scope.actualizado = true;
    
                    setTimeout(function() {
                        $scope.actualizado = false;
                        $scope.$apply();
                    }, 3500);
                };
    
            });

        }

    };
    
}]);