// Variable Bank

// False = dd/mm, True = mm/dd
var dateFormat = false;
// True = 24, False = 12
var clockMode = false;
// False = N, True = Y
var isAlertClosed = false;
// True = Digital, False = Analog
var isDigital = true;

// Main Code

// Function executes when page loads
$(document).ready(function() {
  // TODO
})

setInterval(function() {
  // Date declared every second to refresh
  var date = new Date();
  // Gets date in number form
  var dd = String(date.getDate()).padStart(2, '0');
  // Gets month in number form
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  // Gets year in number form
  var yyyy = date.getFullYear();
  // Selects which date format to use
  if(dateFormat === false) {
      var today = dd + "/" + mm + "/" + yyyy;
  } else {
      var today = mm + "/" + dd + "/" + yyyy;
  }
  // Prints out date
  $(".date").html(today);

  // Gets hours value
  var hours = date.getHours();
  // Accounts for 12 hour
  if (clockMode === false) {
      // Selects between AM and PM
      var ampm = (hours < 12) ? "AM" : "PM";
      // Prints AM / PM
      $(".ampm").html(ampm);
      // Gets hour in 12 hour format
      hours = (hours > 12) ? hours - 12 : hours;
  }
  // Gets minute value
  var minutes = date.getMinutes();
  // Gets Second value
  var seconds = date.getSeconds();
  // Adds 0 to numbers < 10
  hours = (hours < 10 ? "0" : "" ) + hours;
  minutes = (minutes < 10 ? "0" : "" ) + minutes;
  seconds = (seconds < 10 ? "0" : "" ) + seconds;
  // Prints time
  $(".display").html(hours + ":" + minutes + ":" + seconds);
},1000);

//Sorts out Alerts
function alertBox(x) {
  // Sets text to string inputed
  $(".message").html(x);
  openAlert();
  isAlertClosed = false;

  // Closes Alert automatically after 5 seconds
  setTimeout(function() {
      if(isAlertClosed == false) {
          closeAlert();
      }
  },5000)
}

function openAlert() {
  // Glides box in from top
  $(".alertBox").css("top","20vh");
}

function closeAlert() {
  // Glides box out
  $(".alertBox").css("top","-5vh");
}

// Opens the Settings pannel
function showSettings() {
  // Stretches box to fit screen (Length)
  $("#settings").css("height","100vh");
  // Stretches box to fit screen (Width)
  $("#settings").css("width","100%");
  // Moves box into view
  $("#settings").css("left","0");
  // Removes curved edges
  $("#settings").css("border-radius","0");
}

// Swaps from Digital to Analog
function dtoa() {
  // Tells system Digital clock is hidden
  isDigital = false;

  // Shrinks black background
  $(".digital").css("height","0");
  $(".digital").css("width","0");
  // Shrinks font sizes
  $(".display").css("font-size","0");
  $(".ampm").css("font-size","0");
  $(".date").css("font-size","0");

  // Enlarges Analog clock
  setTimeout(function() {
    alertBox("Imagine there's an analog clock");
  }, 1000)
}

// Swaps from Analog to Digital
function atod() {
  // TODO
}
