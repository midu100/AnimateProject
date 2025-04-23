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
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:true,
          prevArrow:'<i class="fa-solid resArrow resP fa-arrow-left"></i>',
          nextArrow:'<i class="fa-solid resArrow resR fa-arrow-right"></i>',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:true,
          prevArrow:'<i class="fa-solid resArrow resP fa-arrow-left"></i>',
          nextArrow:'<i class="fa-solid resArrow resR fa-arrow-right"></i>',
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:true,
          prevArrow:'<i class="fa-solid resArrow resP fa-arrow-left"></i>',
          nextArrow:'<i class="fa-solid resArrow resR fa-arrow-right"></i>',
        }
      },


      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
   
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

// $('.mySlider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow:'<i class="fa-solid arrows prr fa-arrow-left"></i>',
//     nextArrow:'<i class="fa-solid arrows nrr fa-arrow-right"></i>',
//     responsive: [
//       {
//         breakpoint: 575,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         }
//       },



// c


//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });
      
$('.mySlider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class="fa-solid arrows prr fa-arrow-left"></i>',
  nextArrow:'<i class="fa-solid arrows nrr fa-arrow-right"></i>',
  responsive: [
           {
             breakpoint: 575,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
             }
           },
           {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },


          ]

});