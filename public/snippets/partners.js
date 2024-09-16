// START Animazione per lo slider di How We Work

let card = document.getElementsByClassName('values-card');
let title = document.getElementsByClassName('values-card-title');
let description = document.getElementsByClassName('values-card-text');
let img = document.getElementsByClassName('vc-image');

for (let i = 0; i < 5; i++) {

    let titleAnimationin = () =>{
        card[i].style.transform = 'scale(1.06,1.06)';
        card[i].style.boxShadow = "rgba(149, 157, 165, 0.6) 0px 8px 24px";
        img[i].style.opacity = "0.8";
        title[i].style.left = -130+"%";
        description[i].style.left= 0+"%";
    };
    let titleAnimationout = () =>{
        card[i].style.boxShadow = "rgba(149, 157, 165, 0.6) 0px 0px 0px";

        card[i].style.transform = 'scale(1,1)';
        title[i].style.left = 0+"%";
        description[i].style.left= -130+"%";
        img[i].style.opacity = "0.2";
    };
    card[i].onmouseenter = titleAnimationin;
    card[i].onmouseleave = titleAnimationout;
    

}
