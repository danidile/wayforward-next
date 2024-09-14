// START Animazione per lo slider di How We Work
let slide1 = document.getElementById('hww-slide-1');
let slide2 = document.getElementById('hww-slide-2');
let slide3 = document.getElementById('hww-slide-3');
let slide4 = document.getElementById('hww-slide-4');
let container = document.getElementById('hww-slider');

let slideRight = () =>{
    container.style.left = -28 + "vw";
};
let slideLeft = () =>{
    container.style.left = 0 + "vw";
};
slide1.onmouseover = slideLeft;
slide4.onmouseenter = slideRight;
