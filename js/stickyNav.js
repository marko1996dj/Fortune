window.onscroll = function() {stickyNav()};

function stickyNav() {

  var navbar = document.getElementById("navBarWrapper");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    console.log(sticky);
    console.log(window.pageYOffset)
  }else if(window.pageYOffset == 0 && sticky == 0){
    navbar.classList.remove("sticky");
  }
}
