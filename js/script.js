// Aos animation 
AOS.init();
// counter
$('.counter').counterUp({
    delay: 10,
    time: 3000
});
// slick slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    speed:2000,
   
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:false
  });

//   review slider
$('.mySlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid arrows prr fa-arrow-left"></i>',
    nextArrow:'<i class="fa-solid arrows nrr fa-arrow-right"></i>',
  });
      