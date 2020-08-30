const toggleButton = document.getElementsByClassName("button")[0];
const navbarLinks = document.getElementsByClassName("navvybar")[0];
toggleButton.addEventListener("click", function(event){
    navbarLinks.classList.toggle("active")})


var input1 = document.getElementsByTagName("input")[0];
var input2 = document.getElementsByTagName("input")[1];
var sign = document.getElementById("sign");
input1.addEventListener("keypress", function (Event) {
    if ((Event.keyCode === 13) && (input1.value.length >= 10)) {
        Event.preventDefault();
        input2.focus();
    }
});
input2.addEventListener("keypress", function (Event) {
    if ((Event.keyCode === 13) && (input1.value.length >= 6))
        {
        Event.preventDefault();
        sign.focus(); 
    }
});

