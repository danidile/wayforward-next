// START Animazione per lo slider di How We Work

let card = document.getElementsByClassName('wpw-card');
let title = document.getElementsByClassName('values-card-title');
let description = document.getElementsByClassName('values-card-text');

for (let i = 0; i < 5; i++) {

    let titleAnimationin = () =>{
        description[i].style.height = 'auto';
        description[i].style.opacity = '1';
        card[i].style.boxShadow = "rgba(149, 157, 165, 0.6) 0px 8px 24px";
        
    };
    let titleAnimationout = () =>{
        card[i].style.boxShadow = "rgba(149, 157, 165, 0.6) 0px 0px 0px";

        description[i].style.height = '0px';
    };
    card[i].onmouseenter = titleAnimationin;
    card[i].onmouseleave = titleAnimationout;
    

}
