var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

navbar.onclick = function () {
  if (navbar.className.includes("open")) {
    navbar.classList.remove("open");
  } else {
    navbar.classList.add("open");
  }
};

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
