window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementById("navBarWrapper");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else  {
    navbar.classList.remove("sticky");
  }
}
