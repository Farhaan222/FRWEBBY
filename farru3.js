app.controller('faru2',function($scope,$http){
    $http.get('Fwebby HOME.html').then(function(){
        let curser = document.getElementsByClassName("cursor")[0];
        const farri = document.getElementsByClassName('heading')[0];
        const frwebbby= document.getElementsByClassName('main')[0];
        window.addEventListener("mousemove",function cursor(Event)
            {
                curser.style.top = Event.pageY + "px";
                curser.style.left = Event.pageX + "px";
            }
        );
        farri.addEventListener('click',(Event) => {
            if(frwebbby.style.display === "none")
            {
                frwebbby.style.display = 'flex';
            }
            else{
                frwebbby.style.display = 'none';
            }
        });
            
    });
});