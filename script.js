// Set the date we're counting down to (7 days, 2 hours, 25 minutes, 20 seconds from now)
var countDownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000) + (2 * 60 * 60 * 1000) + (25 * 60 * 1000) + (20 * 1000);

// Update the countdown every 1 second
var countdownfunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("days").innerText = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.querySelector(".countdown").innerHTML = "EXPIRED";
  }
}, 1000);