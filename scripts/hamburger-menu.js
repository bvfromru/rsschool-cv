let hamburgerButton = document.getElementById("burger-toggle");
hamburgerButton.addEventListener("click", myFunction);

function myFunction() {
  let hamburgerMenu = document.getElementById("burger-menu");
  hamburgerMenu.classList.toggle("open");
}