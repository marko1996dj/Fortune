window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementsByClassName("navBarWrapper")[0];
  var sticky = navbar.offsetTop;
  var inspire = document.getElementById("inspire");

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > sticky) {
    inspire.classList.add("margin");
  }else{
    inspire.classList.remove("margin");
  }
}
