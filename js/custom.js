$(function(){
    $('.banner-right-slider').slick({
        infinite: true,
        nextArrow: '.banner-right-chevron',
        prevArrow: '.banner-left-chevron',
        
    });
    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
      });
});



