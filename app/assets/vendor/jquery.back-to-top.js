$(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.js-back-to-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('back-to-top-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
// Smooth scroll for in page links - http://wibblystuff.blogspot.in/2014/04/in-page-smooth-scroll-using-css3.html
// Improvements from - https://codepen.io/kayhadrin/pen/KbalA

    $(function() {
        var $window = $(window), $document = $(document),
            transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
            scrollTime = 1; // scroll time in seconds

        $(document).on("click", "a[href*=#]:not([href=#])", function(e) {
            var target, avail, scroll, deltaScroll;
        
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                target = $(this.hash);
                target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

                if (target.length) {
                    avail = $document.height() - $window.height();

                    if (avail > 0) {
                        scroll = target.offset().top;
            
                        if (scroll > avail) {
                            scroll = avail;
                        }
                    } else {
                        scroll = 0;
                    }

                    deltaScroll = $window.scrollTop() - scroll;

                    // if we don't have to scroll because we're already at the right scrolling level,
                    if (!deltaScroll) {
                        return; // do nothing
                    }

                    e.preventDefault();
                    
                    if (transitionSupported) {
                        $("html").css({
                            "margin-top": deltaScroll + "px",
                            "transition": scrollTime + "s ease-in-out"
                        }).data("transitioning", scroll);
                    } else {
                        $("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
                        .animate({
                            scrollTop: scroll + "px"
                        }, scrollTime * 1000);
                        
                        return;
                    }
                }
            }
        });

        if (transitionSupported) {
            $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
                var $this = $(this),
                    scroll = $this.data("transitioning");
                
                if (e.target === e.currentTarget && scroll) {
                    $this.removeAttr("style").removeData("transitioning");
                    
                    $("html, body").scrollTop(scroll);
                }
            });
        }
    });

});
