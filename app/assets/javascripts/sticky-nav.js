// ===================================== Sticky Scroller - START ===================================== //

// This is what makes the headers stick - Start
     var stickyNav = (function() {
          var $window = $(window),
               $stickies;
          var load = function(stickies) {
               if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {
                    $stickies = stickies.each(function() {
                         var $thisSticky = $(this).wrap('<div id="sidebar" />');
                         $thisSticky
                              .data('originalPosition', $thisSticky.offset().top)
                              .data('originalHeight', $thisSticky.outerHeight())
                                   .parent()
                                   .height($thisSticky.outerHeight());
                         });
                    $window.off("scroll.stickies").on("scroll.stickies", function() {
                         _whenScrolling();
                    });
               }
          };

          var _whenScrolling = function() {
               $stickies.each(function(i) {
                    var $thisSticky = $(this),
                         $stickyPosition = $thisSticky.data('originalPosition');
                    if ($stickyPosition <= $window.scrollTop()) {
                         var $nextSticky = $stickies.eq(i + 1),
                              $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
                         $thisSticky.addClass("fixed");
                    if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
                         $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
                    }
               } else {
                    var $prevSticky = $stickies.eq(i - 1);
                    $thisSticky.removeClass("fixed");
                    if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
                         $prevSticky.removeClass("absolute").removeAttr("style");
                    }
               }
          });
     };

     return {
          load: load
     };
})();

$(function() {
     stickyNav.load($(".scroller"));
});
// This is what makes the headers stick - END


// (function moveScroller() {
//      var $anchor = $("#scroller-anchor");
//      var $scroller = $('#scroller');
//
//      var move = function() {
//           var st = $(window).scrollTop();
//           var ot = $anchor.offset().top;
//           if(st > ot) {
//                $scroller.css({
//                     position: "fixed",
//                     top: ""
//                });
//                $scroller.addClass("fixed");
//           } else {
//                if(st <= ot) {
//                     $scroller.css({
//                          position: "relative",
//                          top: ""
//                     });
//                     $scroller.removeClass("fixed");
//                }
//           }
//      };
//
//      $(window).scroll(move);
//      move();
// })();

// var windw = this;
//
// $.fn.followTo = function ( elem ) {
//     var $this = this,
//         $window = $(windw),
//         $bumper = $(elem),
//         bumperPos = $bumper.offset().top,
//         thisHeight = $this.outerHeight(),
//         setPosition = function(){
//             if ($window.scrollTop() > (bumperPos - thisHeight)) {
//                 $this.css({
//                     position: 'absolute',
//                     top: (bumperPos - thisHeight)
//                 });
//             } else {
//                 $this.css({
//                     position: 'fixed',
//                     top: 0
//                 });
//             }
//         };
//     $window.resize(function()
//     {
//         bumperPos = pos.offset().top;
//         thisHeight = $this.outerHeight();
//         setPosition();
//     });
//     $window.scroll(setPosition);
//     setPosition();
// };
//
// $('#sidebar').followTo('#stopper');

// function checkOffset() {
//      if($('#sidebar').offset().top + $('#sidebar').height()
//           >= $('#footer').offset().top - 10)
//      $('#sidebar').css('position', 'absolute');
//      if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
//           $('#sidebar').css('position', 'fixed'); // restore when you scroll up
//      $('#sidebar').text($(document).scrollTop() + window.innerHeight);
// }
// $(document).scroll(function() {
//      checkOffset();
// });
// ===================================== Sticky Scroller - END ===================================== //

// $(function() {
//     // Our menu to clone
//     var stickyDiv = $('.js-sticky-container');
//     // Class with fixed positioning
//     var posFixed = 'js-sticky-fixed';
//     // Product menu's offset from top window
//     var menuTop = stickyDiv.offset().top;
//     // Clone the product menu, and add the fixed class
//     var menuClone = stickyDiv.clone(true).addClass(posFixed);
//
//     var numProducts = $('#js-product-menu li').size();
//
//     $('#js-product-menu li').each(function(index, value) {
//         var newIndex = index + 1;
//         $(this).attr('id','js-product-' + newIndex);
//     });
//
//     $('#js-current-products .js-current-product').each(function(index, value) {
//         var newIndex = index + 1;
//         $(this).attr('id','js-current-product-' + newIndex);
//     });
//
//
//     var stickyContainer = function(stickyDiv, posFix, clonedWidth) {
//         if (clonedWidth === undefined) { // use original container width
//             var clonedWidth = $(stickyDiv).width();
//         }
//
//         $('#js-current-products').each(function(index, value) {
//             console.log($(this));
//         });
//
//         $(window).bind('scroll', function() {
//             // What the current px is from vertical scroll
//             var scrollY = window.pageYOffset;
//             // They scrolled more than the original offset
//             if (scrollY > menuTop) {
//                 if (menuClone.parent().length === 0) {
//                     $('.js-current-product').each(function(index, value) {
//                         var newIndex = index + 1;
//                         console.log(newIndex);
//                         var currentProduct = $(this).offset().top - 500;
//                         if (scrollY > currentProduct) {
//                             $('#js-product-menu li').removeClass('selected');
//                             $('#js-product-' + newIndex).addClass('selected');
//                             console.log(newIndex);
//                         }
//                     });
//
//                     stickyDiv.addClass(posFixed).width(clonedWidth);
//                     menuClone.after(stickyDiv.parent());
//
//                 }
//             } else {
//                 $('#js-product-menu li').first().removeClass('selected');
//                 stickyDiv.removeClass(posFixed);
//                 menuClone.remove();
//             }
//
//         });
//     };
//     stickyContainer(stickyDiv, posFixed);
//
// });
