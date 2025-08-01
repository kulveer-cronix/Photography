const x =document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");


x.onclick=()=>{
    x.classList.toggle("bx-x");
    menu.classList.toggle('active')
    
}