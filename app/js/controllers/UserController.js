define(['Console'], function (Console) {
    "use strict";
    Console.group("Entering UserController module.");

    var controller = ['$scope', 'UserService', function ($scope, UserService) {
        Console.group("UserController entered.");

        $scope.users = UserService.query();

        Console.groupEnd();
    }];

    Console.groupEnd();
    return controller;
});