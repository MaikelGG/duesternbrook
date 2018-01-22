jQuery(document).ready(function($){

//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1024;

	//primary navigation slide-in effect
	if($(window).width() < MQL) {

    var headerHeight = $('.header').outerHeight();

    $(window).on('scroll',
		{
	    previousTop: 0
	  },

    function () {
		  var currentTop = $(window).scrollTop();

      //check if user is scrolling up
		  if (currentTop < this.previousTop ) {
		    //if scrolling up...
		    if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
		    	$('.header').addClass('is-visible');
		    } else {
		    	$('.header').removeClass('is-visible is-fixed');
		    }
		  } else {
		    //if scrolling down...
		    $('.header').removeClass('is-visible');
		    if( currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
		  }
		  this.previousTop = currentTop;
		});
	}

});
