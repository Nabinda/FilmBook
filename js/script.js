/*=============================
     Preloader
===============================*/
$(window).on('load', function() { //make sure that whole sites is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/*=============================
     Team
===============================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
});

/*=============================
     Progress Bars
===============================*/
$(function() {

  $("#progress-elements").waypoint(function() {

    $(".progress-bar").each(function() { /* helps to loop through all progress bar */

      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 2000);

    });

    this.destroy();
  }, {
    offset: 'bottom-in-view' /* as shown as progress bar hits bottom of browser window function written triggred */
  });

});

/*=============================
     Responsive Tabs
===============================*/
$(function() {

  $('#services-tabs').responsiveTabs({
    animation: 'slide'
  });

});

/* =========================================
               Portfolio
============================================ */
$(window).on('load', function() {

  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {

    // get filter value
    var filterValue = $(this).attr('data-filter');

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // active button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/* =========================================
               Magnifier
============================================ */
$(function() {

  $("#portfolio-wrapper").magnificPopup({ /* select main parent element for child element */
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});



/* =========================================
              Stats
============================================ */
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

/* =========================================
              Clients
============================================ */
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 6
      }
    }

  });
});

/* =========================================
              Navigation
============================================ */

// show & hide white Navigation
$(function() {

  //show/hide nav on page loaded
  showHideNow();


  $(window).scroll(function() {

    //show/hide nav on page scrolled
    showHideNow();

  });

  function showHideNow() {

    if ($(window).scrollTop() > 50) { //scrollTop get the vetical position of scroll bar
      $("nav").addClass('white-nav-top');

      //display dark logo image
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png"); //changes the src source file

      //show back to top Button
      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");

      //show logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      //Hide Back to top
      $("#back-to-top").fadeOut();
    }

  }

});

//Smooth Scrolling
$(function() {

  $("a.smooth-scroll").click(function(event) {

    event.preventDefault(); // remove default behaviour of the element

    //get section id like #about, #work etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64 //subtracting value give the perfect position
    }, 1250, "easeInOutExpo");


  });

});

/* =========================================
              Mobile Menu
============================================ */
$(function() {

  //show mobile Navigation
  $("#mobile-nav-open-btn").click(function() {

    $("#mobile-nav").css("height", "100%");
  });

  //hide mobile Navigation
  $("#mobile-nav-close-btn , #mobile-nav a").click(function() {

    $("#mobile-nav").css("height", "0%");
  });

});

/* =========================================
              Animatation
============================================ */
// animate on scroll
$(function() {
  new WOW().init();
});

// home animation on page load
$(window).on('load', function() {

  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");

});
