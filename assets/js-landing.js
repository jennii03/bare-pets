// SCROLL
const _scroll = jQuery('.js-top');

_scroll.click(function(e){
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: 0
  });
});

const _jsSign = jQuery('.js-signup');

_jsSign.click(function(e){
  e.preventDefault();

  const _form = jQuery(this).attr('href');


  jQuery('html, body').animate({
    scrollTop: jQuery( _form ).offset().top - 100
  });

});

/////// HEADER
const _logo = jQuery('.landing-logo');

if( _logo ) {
  jQuery(window).scroll(function(){
    if( scrollY > 50 ) {
      _logo.addClass('sticky');
      _scroll.addClass('show');
    } else {
      _logo.removeClass('sticky');
      _scroll.removeClass('show');
    }
  });

  jQuery(document).ready(function(){
    if( scrollY > 50 ) {
      _logo.addClass('sticky');
      _scroll.addClass('show');

    } else {
      _logo.removeClass('sticky');
      _scroll.removeClass('show');

    }
  });
}

////////// TABLE SLIDER
const _table = jQuery('.table-to-slider');

if( _table ) {
  _table.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false
  });
}

// /////// BULLETS
const _bullets = jQuery('.bullets');

if( _bullets ) {
  _bullets.owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    stagePadding: 30,
    center: true,
    responsive: {
      450: {
        items: 3,
        stagePadding: 40
      },
      1024: {
        items: 6,
        stagePadding: 0,
        loop: false,
        center: false
      } 
    }
  });
}

// /////// VIDEO TESTIMONIAL
const _videos = jQuery('.video-testimonial');

if( _videos ) {
  _videos.owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: false,
    stagePadding: 50,
    margin: 20,
    responsive: {
      450: {
        items: 2,
        stagePadding: 50,
        margin: 20
      },
      768: {
        items: 4,
        stagePadding: 0,
        margin: 20
      }
    }
  });
}

/////// OWL
let _el1 = jQuery('.compare-slider');
let _el2 = jQuery('.compare-name-slider');

if( _el1 && _el2 ) {
  jQuery(document).ready(function(){

    //Sync o2 by o1
    _el1.on('change', '.owl-next', function () {
        _el2.trigger('next.owl.carousel')
    });

    _el1.on('change', '.owl-prev', function () {
        _el2.trigger('prev.owl.carousel')
    });

    //Sync o1 by o2
    _el2.on('click', '.owl-next', function () {
        _el1.trigger('next.owl.carousel')
    });

    _el2.on('click', '.owl-prev', function () {
        _el1.trigger('prev.owl.carousel')
    });

    jQuery('.js-slider-pager').click(function(){
      let _index = jQuery(this).data('index') - 1;
      _el1.trigger('to.owl.carousel', _index);
      _el2.trigger('to.owl.carousel', _index);
    });

    _el1.on('changed.owl.carousel',function(property){
      var current = property.item.index + 1;
      
      jQuery('.js-slider-pager').removeClass('active');
      jQuery('.js-slider-item-' + current).addClass('active');
    });


    _el1.owlCarousel({
      items: 1,
      loop: false,
      nav: false,
      dots: false,
      mouseDrag: false
    });

    _el2.owlCarousel({
      items: 1,
      loop: false,
      nav: true,
      dots: false,
      mouseDrag: false
    });

  });
}