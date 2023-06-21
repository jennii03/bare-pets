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
    
    $("#recovery-button").click(function() {
      $(".login-main-form-head, .login-main-form").hide();
    });
  
    $("#login__cancel").click(function() {
      $(".login-main-form-head, .login-main-form").show();
    });

})();