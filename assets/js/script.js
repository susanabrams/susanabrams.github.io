(function ($) {
  'use strict';

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').addClass('sticky-top shadow-sm');
    } else {
      $('.navbar').removeClass('sticky-top shadow-sm');
    }
  });

  // Hero Header carousel
  $('.header-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    loop: true,
  });

  // International carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $('.btn-play').click(function () {
      $videoSrc = $(this).data('src');
    });
    console.log($videoSrc);

    $('#videoModal').on('shown.bs.modal', function (e) {
      $('#video').attr(
        'src',
        $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
      );
    });

    $('#videoModal').on('hide.bs.modal', function (e) {
      $('#video').attr('src', $videoSrc);
    });
  });

  // testimonial carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });
})(jQuery);

// caraousel for pregnancy page
$('.exercise-2').owlCarousel({
  autoplay: false,
  smartSpeed: 1000,
  center: false,
  dots: true,
  loop: false,
  margin: 12,
  // nav: true,
  // navText: [
  //   '<i class="fas fa-chevron-left text-center"></i>',
  //   '<i class="fas fa-chevron-right text-center"></i>',
  // ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 3,
    },
  },
});

// caraousel for pregnancy page
$('.exercise-3').owlCarousel({
  autoplay: false,
  smartSpeed: 1000,
  center: false,
  dots: true,
  loop: false,
  margin: 12,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 3,
    },
  },
});

// Custom navigation
$('.owl-next-3').click(function () {
  $('.exercise-3').trigger('next.owl.carousel');
});
$('.owl-prev-3').click(function () {
  $('.exercise-3').trigger('prev.owl.carousel');
});

// Custom navigation
$('.owl-next').click(function () {
  $('.exercise-2').trigger('next.owl.carousel');
});
$('.owl-prev').click(function () {
  $('.exercise-2').trigger('prev.owl.carousel');
});

// caraousel for pregnancy page
$('.exercise-post').owlCarousel({
  autoplay: false,
  smartSpeed: 1000,
  center: false,
  dots: false,
  loop: false,
  margin: 12,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

function goToPregnancyPage() {
  window.location.href = 'pages/pregnancy/index.html';
}
function goToMomEduPage() {
  window.location.href = 'momedu.html';
}
function goToHealthyPage() {
  window.location.href = 'lifestyle.html';
}
function goToExerciesPage() {
  window.location.href = 'exercise.html';
}

function goToPostPartumPage() {
  window.location.href = 'pages/postpartum/index.html';
}

function goToPostMomEduPage() {
  window.location.href = 'momedu.html';
}

function goToPostHealthyPage() {
  window.location.href = 'lifestyle.html';
}

function goToPostExercisePage() {
  window.location.href = 'exercise.html';
}
