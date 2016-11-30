///////////////////////////////////  Dynamic Panels - Profile Centre  ///////////////////////////////////
var $selects = $('.filters select');
$selects.on('change', getValues).first().trigger("change");
function getValues() {
     var vals = $selects.map(function() {
          return this.value;
     }).get();
     if (vals.join('') === "one") {
          // $(".dynamic-panels").addClass("visible");
          $("#paralegal-one, #paralegal-two, #paralegal-three").fadeIn("slow");
          $(".intro-yes.one").fadeIn("slow");
          $("#paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine, .intro").hide();
          $(".intro-yes.two, .intro-yes.three, .intro-yes.four, .intro-yes.five").hide();
     } else if (vals.join('') === "two") {
          // $(".dynamic-panels").addClass("visible");
          $("#paralegal-four, #paralegal-five").fadeIn("slow");
          $(".intro-yes.two").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine, .intro").hide();
          $(".intro-yes.one, .intro-yes.three, .intro-yes.four, .intro-yes.five").hide();
     } else if (vals.join('') === "three") {
          // $(".dynamic-panels").addClass("visible");
          $("#paralegal-six").fadeIn("slow");
          $(".intro-yes.three").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-seven, #paralegal-eight, #paralegal-nine, .intro").hide();
          $(".intro-yes.one, .intro-yes.two, .intro-yes.four, .intro-yes.five").hide();
     } else if (vals.join('') === "four") {
          // $(".dynamic-panels").addClass("visible");
          $("#paralegal-seven, #paralegal-eight").fadeIn("slow");
          $(".intro-yes.four").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-nine, .intro").hide();
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.five").hide();
     } else if (vals.join('') === "five") {
          // $(".dynamic-panels").addClass("visible");
          $("#paralegal-nine").fadeIn("slow");
          $(".intro-yes.five").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, .intro").hide();
          $(".intro-yes.one, .intro-yes.two, .intro-yes.three, .intro-yes.four").hide();
     } else {
          $(".dynamic-panels").removeClass("visible");
     }
}
