$(function() {
  $('.toggle_btn').on('click', function() {
    if(!$('#header').hasClass('open')) {
      $('#header').addClass('open');
    }else {
      $('#header').removeClass('open');
    }
  });

  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  $('a[href^="#"').click(function() {
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("#header").removeClass('open');
    $("html, body").animate({
      scrollTop: position
    },600,"swing");
    return false;
  });
  $("#scroll").click(function () {
      var position = 0;
      var speed = 600;
      $("html,body").animate({
        scrollTop:position
      },speed);
    });
  $(window).scroll(function() {
    $('.fadein').each(function() {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > targetElement - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});
