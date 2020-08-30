let curser = document.getElementsByClassName("cursor")[0];
const farri = document.getElementsByClassName('heading')[0];
const frwebbby= document.getElementsByClassName('main')[0];
window.addEventListener("mousemove",function cursor(Event)
    {
        curser.style.top = Event.pageY + "px";
        curser.style.left = Event.pageX + "px";
    }
);
farri.addEventListener('click', (Event) => {
    frwebbby.classList.toggle("active")
});