// ======================================================
   //PUSH MENU
// ======================================================
	var $menuLeft = $(".pushmenu-left");
	var $menuRight = $(".pushmenu-right");
	var $toggleleft = $("#menu_bars.left");
	var $toggleright = $("#menu_bars.right");
	$toggleleft.on("click", function() {
	  $(this).toggleClass("active");
	  $(".pushmenu-push").toggleClass("pushmenu-push-toright");
		$menuLeft.toggleClass("pushmenu-open");
		return false;
	 });
	 $toggleright.on("click", function() {
		 $(this).toggleClass("active");
		 $(".pushmenu-push").toggleClass("pushmenu-push-toleft");
		  $menuRight.toggleClass("pushmenu-open");
		  return false;
	 });
	 
	 
  var trigger = $('.hamburger'),
  overlay = $('.overlay_full'),
  isClosed = false;
  trigger.on('click', function() {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').on('click', function() {
    $('#wrapper').toggleClass('toggled');
  });

  var side_drop = $('.push_nav .dropdown');
  side_drop.on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  side_drop.on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });