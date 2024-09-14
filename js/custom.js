jQuery(document).ready(function($){
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() ) {
            $('header.header').addClass('fixed');
        } else {
            $('header.header').removeClass('fixed');
        }
    });

    $('#mouse-scroll').click(function() {
      $('html, body').animate({
          scrollTop: $('#AboutUs').offset().top - 0 // Adjusting scroll position by 100px
      }, 500); // Duration of the animation in milliseconds
  });
    
    $('[data-fancybox="gallery"]').fancybox({
     // Options will go here
    });
    
    $(".mnutog").on('click', function(){
        $("header.header").addClass("active");
    });

    $(".mnucls").on('click', function(){
        $("header.header").removeClass("active");
    });
    $("#mouse-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#myservicess").offset().top - 50 // Adjust the offset value as needed
        }, 200); // Adjust the animation duration as needed (1000ms = 1s)
    });


      

    $('.testimonial-block-one').slick({
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
    });
      

    $('.clientslider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll:5,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 6,
				arrows: false,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				arrows: false,
				slidesToScroll: 5
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 4,
				arrows: false,
				slidesToScroll: 4
			  }
			}
		  ]
    });
    
    var $animation_elements = $('.imageeffect .wp-block-image, .fadeLeft, .fadeUp, .fadeRight, .fadePopup, .leftSlide');
    var $window = $(window);
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            // $element.removeClass('in-view');
        }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    
});




particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


$(document).ready(function () {
  // Handle scroll event
  $(document).on('scroll', onScroll);

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      // Remove active class from all links
      $('a').removeClass('active');

      // Add active class to the clicked link
      $(this).addClass('active');

      // Get the target element
      var target = $(this).attr('href');
      
      // Check if target is valid and not just '#'
      if (target && target !== "#") {
          var $target = $(target);

          // Check if the target element exists
          if ($target.length) {
              // Animate the scroll to the target element
              $('html, body').stop().animate({
                  scrollTop: $target.offset().top - 0
              }, 500, 'swing', function () {
                  // Update the URL hash without jumping
                  window.location.hash = target;
              });
          }
      }
  });
});

function onScroll() {
  var scrollPos = $(document).scrollTop();

  $('.menu-main-menu-container a').each(function () {
      var $currLink = $(this);
      var target = $currLink.attr('href');

      // Check if target is valid and not just '#'
      if (target && target !== "#") {
          var $refElement = $(target);

          if ($refElement.length && $refElement.position().top <= scrollPos && ($refElement.position().top + $refElement.outerHeight()) > scrollPos) {
              $('.menu-main-menu-container a').removeClass('active');
              $currLink.addClass('active');
          } else {
              $currLink.removeClass('active');
          }
      } else {
          $currLink.removeClass('active');
      }
  });
}
