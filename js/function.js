

//LOADER
$(window).on("load", function () {
  "use strict";
  $(".loader").fadeOut(800);
});

jQuery(function ($) {
  "use strict";


  // ======================================================
  //SCROLLING
  // ======================================================
  $("body").scrollspy({
    target: ".navbar",
    offset: 50
  });


  // ------ Back To Top
  var scrollUp = $(".scrollup");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      scrollUp.fadeIn();
    } else {
      scrollUp.fadeOut();
    }
  });
  scrollUp.on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  // ------ Smooth Scroll
  $(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 2000);
  });


  // ------ MENU HIDE & SHOW
  var ost = 0;
  var menu = $(".navbar");
  $(window).on("scroll", function () {
    var cOst = $(this).scrollTop();
    if (cOst == 0) {
      menu.addClass('top-nav-collapse');
    } else if (cOst > ost) {
      menu.addClass('top-nav-collapse').removeClass('default');
    } else {
      menu.addClass('default').removeClass('top-nav-collapse');
    }
    ost = cOst;
  });


  // ----- LIGHT BOX
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox();
  }


  // -----POPUPS
  $('a[href=".team"]').on('click', function (event) {
    event.preventDefault();
    $("#team").addClass('open');
    $('#team > form > input[type="search"]').focus();
  });
  $("#team, #team button.close").on('click keyup', function (event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });
  $('a[href=".popup_login"]').on('click', function (event) {
    event.preventDefault();
    $("#popup_login").addClass("open");
    $('#popup_login > form > input[type="search"]').focus();
  });
  $("#popup_login, #popup_login button.close").on('click keyup', function (event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });


  // ======================================================
  //ALL OWL SLIDERS
  // ======================================================
  $("#main-slider.carousel").carousel({
    interval: 5000,
    singleItem: true,
    transitionStyle: "fade"
  });

  $("#index_7_slider").owlCarousel({
    autoPlay: true,
    singleItem: true,
    pagination: true,
    navigation: false
  });

  $("#about-owl-slider").owlCarousel({
    autoPlay: true,
    singleItem: true,
    pagination: false
  });

  $("#services_index1, #our-agent-slider, #services_slider").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 5 seconds
    items: 3,
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]

  });


  $("#gallery-slider").owlCarousel({
    autoPlay: 2000, //Set AutoPlay to 2 seconds
    navigation: true,
    pagination: false,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
  });


  $(".client-owl").owlCarousel({
    autoPlay: 2000, //Set AutoPlay to 2 seconds
    navigation: false,
    pagination: false
  });


  var revo_slider = $("#rev_slider_8, #rev_slider").revolution({
    sliderType: "standard",
    sliderLayout: "fullwidth",
    scrollbarDrag: "true",
    delay: 9000,
    navigation: {
      arrows: {
        enable: true
      },
      touch: {

        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false

      }

    },

    gridwidth: 1170,
    gridheight: 640,
  });


  // ======================================================
  //CUBEPORTFOLIO
  // ======================================================

  $("#projects").cubeportfolio({
    filters: "#project-filter",
    layoutMode: "grid",
    defaultFilter: "*",
    animationType: "slideDelay",
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: "responsive",
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: true,
  });


  // ======================================================
  //CLOUDY BANNER
  // ======================================================
  function setHeight() {

    var $window = $(window);
    var windowHeight = $(window).innerHeight();
    if ($window.width() >= 1600) {

      $('#index-banner').css('min-height', windowHeight);
    } else {
      $('#banner_2').removeClass('home-center');
    }
  };
  setHeight();

  $(window).resize(function () {});


  // --------- MAP MARKER AND LOCATIONS
  if ($("#map").lenght) {
    var map;
    map = new GMaps({
      el: '#map',
      lat: 21.2334329,
      lng: 72.86372,
      scrollwheel: false
    });

    map.addMarker({
      lat: 21.2334329,
      lng: 72.86372,
      title: 'Marker with InfoWindow',
      infoWindow: {
        content: '<p>Global Construction & Constructors <br/> Buy Now at <a href="https:#."  target="_blank">Global Constructors</a></p>'
      }
    });

  }
});

