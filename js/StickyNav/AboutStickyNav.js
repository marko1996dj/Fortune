window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementsByClassName("navBarWrapper")[0];
  var sticky = navbar.offsetTop;
  var aboutUs = document.getElementById("aboutUs");

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > sticky) {
    aboutUs.classList.add("margin");
  }else{
    aboutUs.classList.remove("margin");
  }
}
