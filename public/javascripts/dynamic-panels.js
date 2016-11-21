///////////////////////////////////  Dynamic Panels - Profile Centre  ///////////////////////////////////
var $selects = $('.filters select');
$selects.on('change', getValues).first().trigger("change");
function getValues() {
     var vals = $selects.map(function() {
          return this.value;
     }).get();
     if (vals.join('') === "nurse" + "one") {
          
          $(".dynamic-panels").addClass("visible");
          $("#nurse-one").fadeIn("slow");
          $("#nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
     } else if (vals.join('') === "nurse" + "two") {
          
          $(".dynamic-panels").addClass("visible");
          $("#nurse-two").fadeIn("slow");
          $("#nurse-one, #nurse-three, #nurse-four, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
     } else if (vals.join('') === "nurse" + "three") {
          
          $(".dynamic-panels").addClass("visible");
          $("#nurse-three").fadeIn("slow");
          $("#nurse-one, #nurse-two, #nurse-four, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
     } else if (vals.join('') === "nurse" + "four") {
          
          $(".dynamic-panels").addClass("visible");
          $("#nurse-four").fadeIn("slow");
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-five").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
     } else if (vals.join('') === "nurse" + "five") {
          
          $(".dynamic-panels").addClass("visible");
          $("#nurse-five").fadeIn("slow");
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four").hide();
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
     } else if (vals.join('') === "paralegal" + "one") {
          
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-one, #paralegal-two, #paralegal-three").fadeIn("slow");
          $("#paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "paralegal" + "two") {
          
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-four, #paralegal-five").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-six, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "paralegal" + "three") {
          
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-six").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-seven, #paralegal-eight, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "paralegal" + "four") {
          
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-seven, #paralegal-eight").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-nine").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else if (vals.join('') === "paralegal" + "five") {
          
          $(".dynamic-panels").addClass("visible");
          $("#paralegal-nine").fadeIn("slow");
          $("#paralegal-one, #paralegal-two, #paralegal-three, #paralegal-four, #paralegal-five, #paralegal-six, #paralegal-seven, #paralegal-eight").hide();
          $("#nurse-one, #nurse-two, #nurse-three, #nurse-four, #nurse-five").hide();
     } else {          
          $(".dynamic-panels").removeClass("visible");
     }
}
