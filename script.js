const message = "Merci de votre visite.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

// -Pour la searchbar adapté à partir du code ci-après en jQuery.
const buttonClass = document.querySelector(".search");
const inputClass = document.querySelector(".inputsearchbar");

buttonClass.addEventListener("click", function expand() {
  buttonClass.classList.toggle("close");
  inputClass.classList.toggle("square");
  if (buttonClass.classList.contains("close")) {
    inputClass.focus();
  } else {
    inputClass.blur();
  }
});
// -************** code en jQuery ***********************//
/*function expand() {
  $(".search").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input').focus();
  } else {
    $('input').blur();
  }
}
$('button').on('click', expand);*/
