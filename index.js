let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active')
}


let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active')
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false, 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
    },
  });