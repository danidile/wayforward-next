// Animazione per lo slider di How We Work
let slide1 = document.getElementById('hww-slide-1');
let slide2 = document.getElementById('hww-slide-2');
let slide3 = document.getElementById('hww-slide-3');
let slide4 = document.getElementById('hww-slide-4');
let container = document.getElementById('hww-slider');
let arrowForward = document.getElementById('arrow-forward');
let arrowBack = document.getElementById('arrow-back');



let screenSize = window.innerWidth;



let slideRight = () =>{
    screenSize = window.innerWidth;
    if(screenSize>=1100){
        container.style.left = -28 + "vw";
    }
};
let slideLeft = () =>{
    screenSize = window.innerWidth;
    if(screenSize>=1100){
        container.style.left = 0 + "vw";
    }
};
let slideRightOnClick = () =>{
    screenSize = window.innerWidth;    
    let position = container.style.left.replace("vw", "").replace("-", "");
        if(screenSize >= 750){
            container.style.left = -78 + "vw";
        }else{
            if(position <= 250){
                container.style.left = - position - 87.5 + "vw";

            }
        }
        console.log(position);
};
let slideLeftOnClick = () =>{
    screenSize = window.innerWidth;    
    let position = container.style.left.replace("vw", "").replace("-", "");
        if(screenSize >= 750){
            container.style.left = 0 + "vw";
        }else{
            if(position > 1){
                container.style.left = - position + 87.5 + "vw";

            }
        }
        console.log(position);

};

console.log('Hello');
slide1.onmouseover = slideLeft;
slide2.onmouseover = slideLeft;
slide3.onmouseenter = slideRight;
slide4.onmouseenter = slideRight;

arrowForward.addEventListener('click', slideRightOnClick);
arrowBack.addEventListener('click', slideLeftOnClick);

arrowForward.onclick = slideRightOnClick;
arrowBack.onclick = slideLeftOnClick;

// Animazione per lo slider di How We Work