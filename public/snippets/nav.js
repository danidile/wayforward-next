let burger = document.getElementById('menu-burger');

// Animazione per lo slider di How We Work
let containerMenu = document.getElementsByClassName('menu-list-container')[0];
let toggle = 0;
let menuEnterOut = () =>{
    console.log('Hello');
    if(toggle === 0){
        containerMenu.style.left = "0%";
        burger.src = "/images/close.png";
        toggle = 1;
    } else{
        containerMenu.style.left = "120%";
        burger.src = "/images/menu.png";
        toggle = 0;
    }

};
console.log('Hello');
burger.onclick = menuEnterOut;
containerMenu.onclick = menuEnterOut;
