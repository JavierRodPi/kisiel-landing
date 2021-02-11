
// ======================================================
   //POPUPS
// ======================================================
 
$(document).ready(function(){

    var sides = ["left", "top", "right", "bottom"];
    $("h1 span.version").text($.fn.sidebar.version);

    for (var i = 0; i < sides.length; ++i) {
        var cSide = sides[i];
        $(".sidebar." + cSide).sidebar({side: cSide});
    }

    $(".sidebar-btn").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");
        $(".sidebar." + side).trigger("sidebar:" + action);
        return false;
    });   


    if( $('.cd-stretchy-nav').length > 0 ) {
        var stretchyNavs = $('.cd-stretchy-nav');

        stretchyNavs.each(function(){
            var stretchyNav = $(this),
            stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

            stretchyNavTrigger.on('click', function(event){
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

$(document).on('click', function(event){
            ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
        });
    }
    $(".fa-search").click(function(){
        $(".search-box").show(500);
    });
    $(".search-close").click(function(){
        $(".search-box").hide(500);
    });


 });

 var navBodyScroll = $('.nav-body .overflow');
    $(window).load(function(){
        navBodyScroll.height($(window).height() - $('.nav-head').height()-45);
        navBodyScroll.mCustomScrollbar({
            theme:"dark-thick",           
            scrollInertia: 300             
        });
    });
    $(window).resize(function(){
        navBodyScroll.height($(window).height() - $('.nav-head').height()-45);
    });







