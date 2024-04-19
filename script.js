let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('nav');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
    navbar.classList.toggle('navbar');
    
}


window.onscroll = () =>{
    menu.classList.remove('fa fa-times');
    
    menu.classList.toggle('fa fa-bars');
    // navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay:{
        delay: 3000,
        desableOnInteraction: false,
    }
  });
