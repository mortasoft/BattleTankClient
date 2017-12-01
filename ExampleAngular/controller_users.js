angular.module("MyUsers", [])
    .controller("UsersController", function ($scope, $http) {
        $scope.users = [];
        $scope.newUsers = {};

        $scope.addUsers = function () {
            $http.post("http://192.168.0.15:5000/api/v1/users", {
                    userTank1: $scope.newUsers.tank1,
                    userTank2: $scope.newUsers.tank2
                })
                .then(function (data, status, headers, config) {
                    console.log(data);
                    $scope.users.push($scope.newUsers);
                    $scope.newUsers = {};
                    alert("The game will start!")

                }, function (error, status, headers, config) {
                    console.log(error);
                });
        };
    });
