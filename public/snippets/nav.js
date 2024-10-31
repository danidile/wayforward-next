let burger = document.getElementById('menu-burger');
let menuContainer = document.getElementsByClassName('menu-container')[0];

// Animazione per lo slider di How We Work
let containerMenu = document.getElementsByClassName('menu-list-container')[0];
let toggle = 0;
let menuEnterOut = () =>{
    console.log('Hello');
    if(toggle === 0){
        containerMenu.style.left = "0%";
        menuContainer.style.height = "100vh";
        menuContainer.style.alignItems = "flex-start";

        burger.src = "/images/close.png";
        toggle = 1;
    } else{
        containerMenu.style.left = "120%";
        burger.src = "/images/menu.png";
        toggle = 0;
        menuContainer.style.height = "auto";
        menuContainer.style.alignItems = "center";

    }

};
console.log('Hello');
burger.onclick = menuEnterOut;
containerMenu.onclick = menuEnterOut;




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementsByClassName("menu-container")[0].style.padding = "10px 10px";
    document.getElementsByClassName("menu-container")[0].style.backgroundColor = "var(--background)";
  } else {
    document.getElementsByClassName("menu-container")[0].style.padding = "20px 10px";
    document.getElementsByClassName("menu-container")[0].style.backgroundColor = "#ededed00";

  }
}