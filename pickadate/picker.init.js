jQuery(document).ready(function($){

  function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
  }

  // attach datepicker plugin to date input fields
  if ( isMobile() == false ) {

    $('.js-date-picker')
      .pickadate({
        container: '.contact-modal',
        format: 'dd mmmm yyyy',
        formatSubmit: 'yyyy/mm/dd'
      })
  }

});
