const swiper = new Swiper('.swiper-container', {
   
    loop: true,
    spaceBetween:30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView:4,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  