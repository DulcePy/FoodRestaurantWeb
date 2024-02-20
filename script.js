let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bi-x');      // x para cerrar menu
    navbar.classList.toggle('active');      // desplegar el menu
}

window.onscroll = () =>{
    menu.classList.remove('bi-x');      // x para cerrar menu
    navbar.classList.remove('active');      // desplegar el menu
}