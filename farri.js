var app = angular.module('farru', []);
app.config(function($routeProvider)
{
    $routeProvider
    .when('/',{
        templateUrl:'farru.html',
    })
});
