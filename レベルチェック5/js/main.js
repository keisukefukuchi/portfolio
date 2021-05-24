$(function(){
  $('.toggle_btn').click(function(){
    if(!$('#header').hasClass('open')) {
      $('#header').addClass('open');
    }else {
      $('#header').removeClass('open');
    }
  });
  $('#mask').click(function() {
    $('#header').removeClass('open');
  });
});
