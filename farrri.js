var app = angular.module('farru', ['ngRoute']);
app.config(function($routeProvider)
{
    $routeProvider
    .when('/',{
        templateUrl:"Fwebby HOME.html",
        controller:'faru2',
    })
    .when('/signin',{
        templateUrl:"farru.html",
        controller:"faru",
    })
    .when('/signup',{
        templateUrl:"farru1.html",
        controller:"faru1",
    })
    .when('/signin/signup',{
        templateUrl:"farru1.html",
        controller:"faru1",
    })
    .otherwise({
        redirectTo:'/#!/',
        controller:'faru2'
    })
});



let curser = document.getElementsByClassName("cursor")[0];
window.addEventListener("mousemove",function cursor(Event)
{
    curser.style.top = Event.pageY + "px";
    curser.style.left = Event.pageX + "px";
}
);