define(['Console'], function (Console) {
    "use strict";
    Console.group("Entering UserService module.");

    var service = ['$resource', function ($resource) {

        return $resource('/user/:id', {id:'@_id'}, {
            get: {
                method: 'GET',
                url:'/user/:id'
            },
            update: {
                method: 'PUT',
                url:'/user/:id'
            }
        });

    }];

    /*app.factory('People', function($resource) {



    });*/

    Console.groupEnd();
    return service;
});
