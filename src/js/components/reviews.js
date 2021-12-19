const REVIEW_COUNT = window.innerWidth < 970 ? 1 : 2;

$(function () {
  $('.reviews__item').slice(0, REVIEW_COUNT).show();
  $('.load-more').click(function (e) {
    e.preventDefault();
    $('.reviews__item:hidden').slice(0, REVIEW_COUNT).fadeIn(400);
  });
});
