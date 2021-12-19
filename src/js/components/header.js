var swiper = new Swiper(".header__slider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const menuBtn = $('.menu-btn');
const menuMobile = $('.menu-mobile');

menuBtn.on('click', function () {
  $(this).toggleClass('menu-btn--active')
  menuMobile.toggleClass('menu-mobile--active')
})
