jQuery(document).ready(function($){

  $('.hero-text').responsiveDom({
      appendTo: '.intro-scene .container',
      mediaQuery: '(min-width: 960px)'
  });


  if ( $('.contact-modal').length ) {
    var formModal = $('.contact-modal');
    var trigger = '';

    if ($('.js-book-activity').length) {
      var trigger = $('.js-book-activity');
    } else if ($('.js-book-deal').length) {
      var trigger = $('.js-book-deal');
    } else if ($('.cta-request').length) {
      var trigger = $('.cta-request');
    }

    //open modal
  	trigger.on('click', function(e){
      e.preventDefault();
      formModal.addClass('is-visible');
    });

    //close modal
  	formModal.on('click', function(e){
  		if( $(e.target).is(formModal) || $(e.target).is('.close-form') ) {
        e.preventDefault();
        formModal.removeClass('is-visible');
  		}
  	});

    //close modal when clicking the esc keyboard button
    $(document).keyup(function(e){
    	if(e.which=='27'){
    		formModal.removeClass('is-visible');
      }
    });

  }

});

/* Highlight the selected element */
function highlight_fields(element) {
  // Set highlight color (yellow).
  element.addClass('highlighted');

  // After a timeout change the color back to default.
  setTimeout(function() {
    element.each(function(el){
      element.removeClass('highlighted');
    })
  }, 400);
}

var changePrices = {
    singleSelection: function(i) {
        var e = $(i);
        e.closest("fieldset").next(".prices").find(".content span").hide().filter('[data-value="price-' + e.val() + '"]').show();
        highlight_fields($(".toggle-highlight span"));
    },
    multiSelection: function(i) {
        var e = $(i);
        period = e.closest("fieldset").find("> div:first-child > select").val(), room = e.closest("fieldset").find("> div:last-child > select").val(), e.closest("fieldset").next("ul.prices").find("span").hide().filter('[data-value="price-' + period + "-" + room + '"]').show()
    }
}
