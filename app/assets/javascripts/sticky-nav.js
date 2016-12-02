// ===================================== Sticky Scroller - START ===================================== //
(function moveScroller() {
     var $anchor = $("#scroller-anchor");
     var $scroller = $('#scroller');

     var move = function() {
          var st = $(window).scrollTop();
          var ot = $anchor.offset().top;
          if(st > ot) {
               $scroller.css({
                    position: "fixed",
                    top: ""
               });
               $scroller.addClass("fixed");
          } else {
               if(st <= ot) {
                    $scroller.css({
                         position: "relative",
                         top: ""
                    });
                    $scroller.removeClass("fixed");
               }
          }
     };

     $(window).scroll(move);
     move();
})();

// if ($('#sticky-anchor').length && Modernizr.mq('only screen and (min-width: 461px)')) {

// ===================================== Sticky Scroller - END ===================================== //
