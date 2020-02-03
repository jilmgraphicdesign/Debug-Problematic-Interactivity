$(document).ready(function() { 
  formatTime = function formatTime(time) {
    hour = time.getHours();
    if (hour>12) {
      hour = hour-12;
      meridies = "PM";
    } else {
      meridies = "AM";
    }
    minute = time.getMinutes();
    if (minute<10) {
      minute = "0"+minute;
    }
    second = time.getSeconds();
    if (second<10) {
      second = "0"+second;
    }
    return hour+":"+minute+":"+second+" "+meridies;
  }
});