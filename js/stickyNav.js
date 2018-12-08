window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementById("navBarWrapper");
  var sticky = navbar.offsetTop;
  var yOffset = window.pageYOffset;

  if (yOffset >= sticky) {
    navbar.classList.add("sticky")
  } else  {
    navbar.classList.remove("sticky");
  }
}
