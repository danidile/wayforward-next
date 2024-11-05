const acc = document.getElementById("dropbtn");
const panel = document.getElementById("dropdown-content");
  

const onclickmenu =() =>{
  panel.style.maxHeight = "0px";
  panel.style.maxHeight = panel.scrollHeight + "px";
}

acc.onmousedown = onclickmenu;
  
