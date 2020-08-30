app.controller('faru1',function($scope,$http)
{
    $http.get('farru1.html').then(function(){
        var input1 = document.getElementsByTagName("input")[0];
        var input2 = document.getElementsByTagName("input")[1];
        var input3 = document.getElementsByTagName("input")[2];
        var input4 = document.getElementsByTagName("input")[3];
        var signup = document.getElementsByTagName("button")[0];
        input1.addEventListener("keypress", function (Event) {
            if ((Event.keyCode === 13) && (input1.value.length>=10))
            {    
                Event.preventDefault();
                input2.focus();
            }
        });
        input2.addEventListener("keypress", function (Event) {
            if (Event.keyCode === 13)
            {    
                Event.preventDefault();
                input3.focus();
            }
        });
        input3.addEventListener("keypress", function (Event) {
            if ((Event.keyCode === 13) && (input3.value.length>=6))
            {    
                Event.preventDefault();
                input4.focus();
            }
        });
        input4.addEventListener("keypress", function (Event) {
            if ((Event.keyCode === 13) && (input4.value === input3.value))
            {    
                Event.preventDefault();
                signup.focus();
            }
        });
    });
});
