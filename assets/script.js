$(document).ready(function () {

  // smooth scroll, https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
  $(".nav-link").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  //Get the button:
  var topButton = $("#topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      topButton.css("display", "block")
    } else {
      topButton.css("display", "none")
    };
  });

  $(topButton).on("click", function (event) {
    event.preventDefault();

    $("html, body").animate({
      scrollTop: 0
    }, 400);
  });

  // Math random fact API from http://numbersapi.com/
  // AJAX
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/math?notfound=floor'
  })
    .then(function (data) {
      $(".randomMathFact").text(data);
    })
    .catch(function (error) {
      $(".randomMathFact").hide();
    });


  $("#copyrightYear").text("© " + (new Date).getFullYear());
});