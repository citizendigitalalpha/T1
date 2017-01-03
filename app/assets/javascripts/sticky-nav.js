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
