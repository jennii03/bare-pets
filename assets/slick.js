jQuery(function() {
    jQuery(document).ready(function(){
        jQuery('.hero-slider').slick({
            arrows: false,
            dots: true
        });
    });

    jQuery('.js-testimonial').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick' 
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    });

    jQuery('.js-testimonial-card').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 3,
                } 
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    jQuery('.js-text-marquee').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                } 
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    jQuery('.js-stories').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
    });

    jQuery('.js-image-carousel').slick({
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    autoplay: true
                }
            }
        ]
    });

    jQuery('.js-cta-bar').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
             
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });

    jQuery('.js-logos-list').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
             
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode: true,
                }
            }
        ]
    });

    jQuery('.module-logo__logos').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        centerMode: false,
        mobileFirst: true, 
        responsive: [
          {
            breakpoint: 1003,
            settings: "unslick"
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 590,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    });

    jQuery('.module-logo-caption__logos').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        centerMode: false,
        mobileFirst: true, 
        responsive: [
          {
            breakpoint: 990,
            settings: "unslick"
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 590,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    });

    jQuery('#module-product-banner__product-thumbnails').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      vertical: true,
      focusOnSelect: true,
      verticalSwiping: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }
      ]
    });
});
