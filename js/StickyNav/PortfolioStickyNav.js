window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementById("navBarWrapper");
  var sticky = navbar.offsetTop;
  var portfolio = document.getElementById("portfolio");

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > sticky) {
    portfolio.classList.add("margin");
  }else{
    portfolio.classList.remove("margin");
  }
}
