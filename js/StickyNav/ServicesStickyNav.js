window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementsByClassName("navBarWrapper")[0];
  var sticky = navbar.offsetTop;
  var services = document.getElementById("services");

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > sticky) {
    services.classList.add("margin");
  }else{
    services.classList.remove("margin");
  }
}
