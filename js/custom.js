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
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
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
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
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

      $('.counter-digit').counterUp({
        delay: 10,
        time: 1000
      });

      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();      
        if(scrolling > 800){
          $('.navbar').addClass('bg');
        }
        else {
          $('.navbar').removeClass('bg');
        }
      });
      
        
});



