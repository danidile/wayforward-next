var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName("panel");
var arrow = document.getElementsByClassName("accordian-arrow");
for (let i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    if (panel[i].style.maxHeight) {
      panel[i].style.paddingTop = "0px"; 
      panel[i].style.maxHeight = null;
      arrow[i].style.transform = "rotate(0deg)";
    } else {
      panel[i].style.paddingTop = "10px"; 
      panel[i].style.maxHeight = panel[i].scrollHeight + "px";
      arrow[i].style.transform = "rotate(90deg)";
    } 
  });
}