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

    
})();