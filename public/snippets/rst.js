// START Animazione per lo slider di How We Work

let card = document.getElementsByClassName('values-card');
let title = document.getElementsByClassName('values-card-title');
let description = document.getElementsByClassName('values-card-text');

for (let i = 0; i < 5; i++) {
    
    let titleAnimationin = () =>{
        title[i].style.left = 0+"%";
        description[i].style.left= -130+"%";
    };
    let titleAnimationout = () =>{
        title[i].style.left = -130+"%";
        description[i].style.left= 0+"%";
    };
    card[i].onmouseenter = titleAnimationin;
    card[i].onmouseleave = titleAnimationout;

}
