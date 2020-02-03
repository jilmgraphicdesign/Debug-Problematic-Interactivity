$(document).ready(function() { 
  $("#reset").on('click',function() {
    $(".results").addClass("hidden");
    $("#reset").addClass("hidden");
    $("#start").removeClass("hidden");
    $("#time_started").addClass("hidden");
    $("#time_ended").addClass("hidden");
  });
});