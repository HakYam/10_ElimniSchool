import 'normalize.css';
import '../sass/style.scss';
import '../sass/login.scss';
import 'bootstrap';
import 'swiper/swiper-bundle.css';
import './swiper.js';



let lastScrollTop = 0; // Variable to store the last scroll position
const navbar = document.getElementById('navbar'); // Replace with your navbar ID

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-100px'; // Adjust this value based on your navbar's height
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }

//   lastScrollTop does not become negative.
//   This could happen in some browsers when bouncing at the top of the page.
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// copyright
document.getElementById('yearCopyright').textContent = new Date().getFullYear();




