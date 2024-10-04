var circle = document.getElementsByClassName("circle-partner");
var title = document.getElementsByClassName("circle-title");



for (let i = 0; i < circle.length; i++) {

    circle[i].addEventListener("mouseover", func);
    circle[i].addEventListener("mouseout", func1);

    function func()
{  
    title[i].style.opacity = "1";
  }
  function func1()
{  
    title[i].style.opacity = "0";
  }
}