import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper(".mySwiper", {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) { // number of pagegroup
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
    },

  
// Responsive breakpoints
breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
     
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
// when window width is >= 800px
    800: {
      slidesPerView: 3, // Display 3 slides at a time
        spaceBetween: 15,
    }
  }
  }
  );


