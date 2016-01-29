jQuery(document).ready(function($){

  var $homeText = $('.hero-text');

  $homeText.responsiveDom({
      appendTo: '.intro-scene .container',
      mediaQuery: '(min-width: 960px)'
  });

});
