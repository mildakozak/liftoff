var mobileMenu = document.getElementById("mobile-menu");
var nav = document.getElementById("navbar");
var iconBack = document.getElementById("mobile-menu-back");


function navbarToggle() {
  mobileMenu.style.display = "block";
  iconBack.style.display = "block";
}

function navbarToggleOff() {
  mobileMenu.style.display = "";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop < 80) {
document.getElementById("navbar").className = "navigation-transparent"
} else {
document.getElementById("navbar").className = "navigation";
}
}
