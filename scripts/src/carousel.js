$(document).ready(function() {

  $("#impression").owlCarousel({
      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,3],
      itemsTablet: [480,2],
      navigation: true,
      pagination: false,
      mouseDrag: false
  });

  $('.activity-slides').owlCarousel({
    itemsCustom : [
      [0, 1],
      [350, 2],
      [700, 3],
      [1000, 5]
    ],
    navigation: true,
    pagination: false,
    mouseDrag: false,
    itemsScaleUp:true
  });

});
