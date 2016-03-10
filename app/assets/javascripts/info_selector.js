$(function() {
  $('.infolink').on('click', function() {
    $('.bio').hide();
    $('.info').hide();
    $('.' + this["id"]).toggle();

    $('.infolink').removeClass('selected')
    $(this).addClass('selected')

  })
});
