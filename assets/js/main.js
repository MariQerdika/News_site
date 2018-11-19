  jQuery(document).ready(function(){
  "use strict"
  $('.slider').ripples({
    dropRadius: 15,
    pertuarbance: 0.01,
  });
});



  $(document).ready(function(){
  $('.toggle').click(function(){
    $('.menu_list').toggleClass('active');
  });
});