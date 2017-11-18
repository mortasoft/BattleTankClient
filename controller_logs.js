angular.module("MyLogs", [])
    .controller("LogsController", function ($scope, $http) {
            $scope.logs = [];
            $scope.newLog = {};
            $http.get("http://10.2.2.214:5000/api/v1/users/tank/logs")
                .then(function (datos) {
                        console.log(datos);
                        $scope.logs = datos.data;
                    },
                    function (error) {
                        console.log(error);
                    });
});
