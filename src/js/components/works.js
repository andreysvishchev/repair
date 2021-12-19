$(function () {
  $('.tab__button').on('click', function (e) {
    e.preventDefault();
    $('.tab__button').removeClass('tab__button--active')
    $('.tab__content').removeClass('tab__content--active')

    $(this).addClass('tab__button--active')
    $($(this).attr('href')).addClass('tab__content--active')

    $('.work__thumb, .work__big, .tab__slider').slick('setPosition')
  });

  $('.tab__slider').slick({
    dots: true,
    prevArrow: ' <button class="tab__arrow tab__arrow--prev"></button>',
    nextArrow: ' <button class="tab__arrow tab__arrow--next"></button>'
  });

  $('.work__thumb').slick({
    asNavFor: '.work__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false
  });

  $('.work__big').slick({
    asNavFor: '.work__thumb',
    draggable: false,
    arrows: false,
    dots: true,
    arrows: true
  });
});
