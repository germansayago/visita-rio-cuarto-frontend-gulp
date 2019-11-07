import moment from 'moment'

// ## count
//
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

$(document).ready(function(){

  // $("#form").hide();
  $("#iconTimes").hide();
  //
  $("#buttonForm").click(function(){
    $("#form").toggle();
    $("#logo").toggle();
    $("#iconSearch").toggle();
    $("#iconTimes").toggle();
  });

});

(function($) {
  
  "use strict";  

  $(window).on('load', function() {

     
    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();    
  

  });      

}(jQuery));

