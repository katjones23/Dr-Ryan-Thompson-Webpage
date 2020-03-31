//Get the button:
var topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Math random fact API from http://numbersapi.com/
// AJAX
$.ajax({
  url: 'http://numbersapi.com/random/math?notfound=floor'
})
  .then(function (data) {
    $(".randomMathFact").text(data);
  })
  .catch(function (error) {
    $(".randomMathFact").hide();
  });


var copyrightYear = document.getElementById("copyright")

copyrightYear.appendChild(document.createTextNode(new Date().getFullYear()))