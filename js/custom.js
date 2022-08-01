$(function(){
    $('.banner-right-slider').slick({
        infinite: true,
        nextArrow: '.banner-right-chevron',
        prevArrow: '.banner-left-chevron',
    });
    //Brand-slider//
    $('.brand-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

      $('.client-slider').slick({
        dots:true,
        slidesToShow:1,
        arrows:false,
      });

      $('.gallery-slider-main').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: false,
        autoplayspeed: 2000,
        arrows:true,
        prevArrow: '.gallery-left-arrow',
        nextArrow: '.gallery-right-arrow',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      $('.counter-digit').counterUp({
        delay: 10,
        time: 1000
      });
        
});



