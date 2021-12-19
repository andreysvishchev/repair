$(function () {
  $('.calc__button').on('click', function () {
    $('.calc__button').removeClass('calc__button--active')

    $(this).addClass('calc__button--active')
  })

  $('.calc__btn').on('click', function () {
    $('.calc__btn').removeClass('calc__btn--active')

    $(this).addClass('calc__btn--active')
  })

  $('.input-style, .select-style').styler();

})
