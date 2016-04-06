jQuery(document).ready(function($){

  $('.menu-open').on('click', function(){
    $('body').addClass('menu-opened');
  });

  $('.menu-close').on('click', function(){
    $('body').removeClass('menu-opened');
  });

  $('.logo').click(function(e){
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 });
  });

});
