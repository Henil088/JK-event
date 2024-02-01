

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclik = () =>{

    menu.classList.toggle('fa fa-times');
    navbar.classList.toggle('active');
}

window.scroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


