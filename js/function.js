// GMaps Start
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
// Gmaps End

//Slick Start
$(function() {
  $(document).ready(function() {
    $('.clients-slider').slick({
      mobile: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
    });

    $('.testimonials-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });
  });

  topFunction();
});
//Slick End

//Burger Nav
function burgerMenu(){
  var menu = document.getElementsByClassName("navBarWrapper")[0];
  menu.classList.add("navBarWrapperMobile");
  menu.classList.remove("navBarWrapper");
}

function burgerMenuClose(){
  var menu = document.getElementsByClassName("navBarWrapperMobile")[0];
  menu.classList.add("navBarWrapper");
  menu.classList.remove("navBarWrapperMobile");
}

//Burger Nav End


//Button up

function topFunction() {

  $("#toTop").on('click', function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  })
}

//Button up end
