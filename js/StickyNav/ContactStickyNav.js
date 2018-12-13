window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementsByClassName("navBarWrapper")[0];
  var sticky = navbar.offsetTop;
  var contact = document.getElementById("contact");

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > sticky) {
    contact.classList.add("margin");
  }else{
    contact.classList.remove("margin");
  }
}
