var miAplicacion = angular.module('miAplicacion', []);
miAplicacion.controller('equipo', function ($scope, $http) {
    $scope.equipo = [];
    $http({
        method: "get",
        url: "../controller/cAdminEquipo.php",
    }).then(function mySucces(result) {
        console.log(result);
        $scope.equipo = result.data;
    }, function myError(response) {
        $scope.equipo = response.statusText;
    });
    

});
miAplicacion.controller('jugador', function ($scope, $http) {
    $scope.aniadirJugador=false;
    $scope.jugador = [];
    $http({
        method: "get",
        url: "../controller/cAdminJugador.php",
    }).then(function mySucces(result) {
        console.log(result);
        //alert(result.data);
        $scope.jugador = result.data;
    }, function myError(response) {
        $scope.jugador = response.statusText;

    });
    $scope.btnAniadir=function(){
        $scope.aniadirJugador=true ;   
    }
    $scope.aniadir= function(){
        var insertDatos= {nombre:$scope.nombre,nickname:$scope.nickname, apellido:$scope.apellido,dni:$scope.dni,fechaNacimiento:$scope.fechaNacimiento, numTel:$scope.numTel, rol:$scope.rol,direccion:$scope.direccion,email:$scope.email,activo:0};
        //En la llamada de http para el insert en params llamarlo dataJugador
        var insertJson=JSON.stringify(insertDatos);
        alert($scope.rol);
        $http({
            method: "get",
            url: "../controller/cInsertJugador.php",
            params:{dataJugador:insertJson}
        }).then(function(response){
            $scope.jugador.push({nombre:$scope.nombre,nickname:$scope.nickname,apellido:$scope.apellido,dni:$scope.dni,fechaNacimiento:$scope.fechaNacimiento,numTel:$scope.numTel,rol:$scope.rol,direccion:$scope.direccion,email:$scope.email});
        });
    }
});

miAplicacion.controller('categoria', function ($scope, $http) {
   
    $scope.categoria = [];
    $http({
        method: "get",
        url: "../controller/cAdminCategoria.php",
    }).then(function mySucces(result) {
        console.log(result);
        //alert(result.data);
        $scope.categoria = result.data;
    }, function myError(response) {
        $scope.categoria = response.statusText;

    });
});

miAplicacion.controller('mensaje', function ($scope, $http) {
   
    $scope.mensaje = [];
    $http({
        method: "get",
        url: "../controller/cAdminMensaje.php",
    }).then(function mySucces(result) {
        console.log(result);
        //alert(result.data);
        $scope.mensaje = result.data;
    }, function myError(response) {
        $scope.mensaje = response.statusText;

    });
});

miAplicacion.controller('cuerpoTecnico', function ($scope, $http) {
   
    $scope.cuerpoTecnico = [];
    $http({
        method: "get",
        url: "../controller/cAdminCuerpoTecnico.php",
    }).then(function mySucces(result) {
        console.log(result);
        //alert(result.data);
        $scope.cuerpoTecnico = result.data;
    }, function myError(response) {
        $scope.cuerpoTecnico = response.statusText;

    });
});