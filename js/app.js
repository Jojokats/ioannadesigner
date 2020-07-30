$(document).ready(function() {

  // Scroll to top button
  $(".back-to-top a[href^='#']").on('click', function(e) {

    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      window.location.hash = hash;
    });

  });

    // Logo scroll to top
    $("#tf-menu a.navbar-brand[href^='#']").click(function () {
        $('html, body').animate({
            scrollTop: $("#tf-home").offset().top - 150
        }, 700);
    });



});
