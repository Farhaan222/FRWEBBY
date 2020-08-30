const nav = document.getElementsByClassName("navvy")[0];
const menu = document.getElementsByClassName("nav")[0];

menu.addEventListener("click",() => {
    nav.classList.toggle("active");

})
