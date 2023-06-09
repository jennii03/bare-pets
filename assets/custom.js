(() => {
    const _toggle = document.querySelectorAll('.faqs--question');

    _toggle.forEach(_item => {
        _item.addEventListener('click', e => {
            e.preventDefault();

            const _current = e.currentTarget;
            const _parent = _current.parentNode;

            _parent.classList.toggle('active');
            
        });
    });

    // HERO
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


    $(".module-pet-parents__main-image").click(function() {
        $(".module-pet-parents__video").show();
        $(".module-pet-parents__image").hide();
        $(".module-pet-parents__play-icon-main").hide();
    });

    var mainImage = $('#main-image-js');
    $('.module-product-banner__product-thumbnail-js-1').on('click', function(event) {
      event.preventDefault();
      var imageSrc = $(this).find('a').data('image');
      var imageZoomSrc = $(this).find('a').data('zoom-image');
      mainImage.attr('src', imageSrc);
      mainImage.attr('data-zoom-image', imageZoomSrc);
    });

    $('.count').prop('disabled', true);
   			$(document).on('click','.plus',function(){
				$('.count').val(parseInt($('.count').val()) + 5 );
     				if ($('.count').val() >= 100) {
						$('.count').val(100); 
            }
    		});
        	$(document).on('click','.minus',function(){
    			$('.count').val(parseInt($('.count').val()) - 5 );
    				if ($('.count').val() <= 0) {
						$('.count').val(0);
					}
    });

    $('.count-2').prop('disabled', true);
      $(document).on('click','.plus-2',function(){
      $('.count-2').val(parseInt($('.count-2').val()) + 5 );
            if ($('.count-2').val() >= 100) {
          $('.count-2').val(100); 
          }
      });
        $(document).on('click','.minus-2',function(){
        $('.count-2').val(parseInt($('.count-2').val()) - 5 );
          if ($('.count-2').val() <= 0) {
          $('.count-2').val(0);
        }
    });

})();