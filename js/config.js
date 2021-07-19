app.config( function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'parciales/home.html',
            controller: 'inicioCtrl'
        })
        .when('/marcas',{
            templateUrl: 'parciales/marcas.html',
            controller: 'marcasCtrl'
        })
        .when('/autos',{
            templateUrl: 'parciales/autos.html',
            controller: 'autosCtrl'
        })
        .when('/auto/:id',{
            templateUrl: 'parciales/auto.html',
            controller: 'autoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});