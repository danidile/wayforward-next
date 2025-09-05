let burger = document.getElementById('menu-burger');
let menuContainer = document.getElementsByClassName('menu-container')[0];
let blurbg = document.getElementsByClassName('blur-menu-bg')[0];
// Animazione per lo slider di How We Work
let containerMenu = document.getElementsByClassName('menu-list-container')[0];
let toggle = 0;
let menuEnterOut = () =>{
    if(toggle === 0){
      blurbg.style.display = "block";

        containerMenu.style.left = "0%";
        menuContainer.style.height = "100vh";
        menuContainer.style.width = "100vw";
        menuContainer.style.position = "absolute";
        menuContainer.style.alignItems = "flex-start";

        burger.src = "/images/close.png";
        toggle = 1;
    } else{
      blurbg.style.display = "none";

        containerMenu.style.left = "120%";
        burger.src = "/images/menu.png";
        toggle = 0;
        menuContainer.style.height = "auto";
        menuContainer.style.position = "relative";

        menuContainer.style.alignItems = "center";
    }
};
burger.onclick = menuEnterOut;




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

let drpdnbtn = document.getElementById('dropbtn');
let dropdown1 = document.getElementById('dropdown1');
let dropdown2 = document.getElementById('dropdown2');

const openDropdown =() =>{
  if(window.innerWidth <= 1100){
  dropdown1.style.display = "block";
  dropdown1.style.maxHeight = "50px";
  dropdown1.style.lineHeight = "normal";
  dropdown1.style.padding = "1rem";

  dropdown2.style.display = "block";
  dropdown2.style.maxHeight = "50px";
  dropdown2.style.lineHeight = "normal";
  dropdown2.style.padding = "1rem";
  }


}


drpdnbtn.onclick = openDropdown;