$(document).ready(function() {
    var end_time = new Date();
    var formatted_end_time = formatTime(end_time);
    var start_time = new Date();
    var formatted_time = formatTime(start_time);
    
  $("#start").on('click',function() {
    $("#start").addClass("hidden");
    $("#stop").removeClass("hidden");
    $("#time_ended").addClass("hidden");
    $("#time_started").removeClass("hidden");
  });

  $("#stop").on('click',function() {
    $("#stop").addClass("hidden");
    $("#reset").removeClass("hidden");
    $("#time_started").addClass("hidden");
    $("#time_ended").removeClass("hidden");
    $("body").append("<p class='results'>You started at "+formatted_time+".</p>");
    $("body").append("<p class='results'>You finished at "+formatted_end_time+".</p>");
    time_change = end_time-start_time;
    $("body").append("<p class='results'>You counted "+time_change+" seconds.</p>");
    $("body").append("<p class='results'>You are off by "+(time_change-45)+" seconds.</p>");
  });
});