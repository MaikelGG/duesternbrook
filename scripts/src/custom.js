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


function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');

  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

if (GetURLParameter('alert') == 'sent') {
  $('<div class="absolute_message"><div class="form-sent"><p>The form has been sent.</p></div></div>').insertBefore('.intro-header').show().delay(5000).fadeOut('slow');
}


window.onload = function loadStuff() {
  var win, doc, img, header, enhancedClass;
  // Quit early if older browser (e.g. IE8).
  if (!('addEventListener' in window)) {
    return;
  }

  win = window;
  doc = win.document;
  img = new Image();
  header = doc.querySelector('.intro-scene');
  enhancedClass = 'intro-scene-enhanced';

  if (typeof(header) != 'undefined' && header != null) {

    // Rather convoluted, but parses out the first mention of a background
    // image url for the enhanced header, even if the style is not applied.
    var bigSrc = (function () {
      // Find all of the CssRule objects inside the inline stylesheet
      var styles = doc.querySelector('style').sheet.cssRules;
      // Fetch the background-image declaration...
      var bgDecl = (function () {
        // ...via a self-executing function, where a loop is run
        var bgStyle, i, l = styles.length;
        for (i = 0; i < l; i++) {
          // ...checking if the rule is the one targeting the
          // enhanced header.
          if (styles[i].selectorText &&
            styles[i].selectorText.indexOf(enhancedClass) >= 0) {
            // If so, set bgDecl to the entire background-image
            // value of that rule
            bgStyle = styles[i].style.backgroundImage;
            // ...and break the loop.
            break;
          }
        }
        // ...and return that text.
        return bgStyle;
      }());
      // Finally, return a match for the URL inside the background-image
      // by using a fancy regex i Googled up, if the bgDecl variable is
      // assigned at all.
      return bgDecl && bgDecl.match(/(?:\(['|"]?)(.*?)(?:['|"]?\))/)[1];
    }());

    // Assign an onLoad handler to the dummy image *before* assigning the src
    img.onload = function () {
      header.className += ' ' + enhancedClass
    };
    img.onerror = function (err) {
      console.error(err)
    }

    // Finally, trigger the whole preloading chain by giving the dummy
    // image its source.
    if (bigSrc) {
      img.src = bigSrc;
    }

  }

};