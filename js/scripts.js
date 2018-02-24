$( document ).ready(function() {
  
 'use strict';

 // Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

(function autoSlider() {
   
    $('.slider .active').each(function () {
         
        if (!$(this).is(':last-child')) {
           
            $(this).delay(3000).fadeOut(1000, function () {
           
                $(this).removeClass('active').next().addClass('active').fadeIn();
               
                autoSlider();
             
            });
        } else {
            $(this).delay(3000).fadeOut(1000, function () {
                
                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').fadeIn();
                
                autoSlider();
            });
        }
       
       
    });
   
}());

});