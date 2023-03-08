const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      568: {
        slidesPerView: 3.5,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10
      },
    },
});