// $(function(){
//   function slickInit() {
//     $('.clients-images').slick({
//       slidesToShow: 4,
//       swipeToSlide: true,
//     });
//   }
// });


$('#goUp').click(function(){
    $('.topBar').animate({
        scrollTop: 0
    }, 2000);
});
