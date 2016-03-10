$(function() {
  $('.infolink').on('click', function() {
    $('.bio').hide();
    $('.info').hide();
    $('.' + this["id"]).toggle();

    // $(this).addClass('.selected')
    // do the selected highlighting next
  })
});
