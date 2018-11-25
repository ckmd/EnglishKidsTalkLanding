(function($) {

	"use strict";

    // Preloader
    $(window).on('load', function() { 
      $('#preloader').delay(350).fadeOut('slow'); 
    })

    // wow animation script
    new WOW().init();

    // Navbar animation on scroll
    $(window).scroll(function() {
      if ($(document).scrollTop() > 5) {
        $('.navbar').addClass('scrolling-header');
      } else {
        $('.navbar').removeClass('scrolling-header');
      }
    });

    // owl-carousel for main-slider 
    $('.screenshot-slider').owlCarousel({
        center: true,
        loop:true,
        nav:true,
        dots:false,
        margin: 0,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        autoplaySpeed:1200,
        navText: [
                '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            ],
        responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
        }
    });



    // Team Carousel
    if($('.blog-carousel').length){
        $('.blog-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav:true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            navText: [
              '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
              '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1199: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }




    
    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      }); 

    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });


    // Video popup jquery
    jQuery("a.demo").YouTubePopUp();

    // Water ripples animation
    $('#water-animation').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });

    //Scroll-Up
    dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });


})(window.jQuery);