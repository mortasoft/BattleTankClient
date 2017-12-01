angular.module("MyLogs", [])
    .controller("LogsController", function ($scope, $http) {
        $scope.logs = [];
        $scope.newLog = {};
        $http.get("http://192.168.0.15:5000/api/v1/users/tank/logs")
            .then(function (datos) {
                    console.log(datos);
                    $scope.logs = datos.data;
                },
                function (error) {
                    console.log(error);
                });
    });
