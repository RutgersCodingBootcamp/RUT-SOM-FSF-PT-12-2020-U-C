var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// 1. Create a function that initializes the timer
function startTimer() {
  // Write code to start the timer here

  // take minutes input from the user 
  var userMinWork = parseInt(workMinutesInput.value);
  var userMinRest = parseInt(restMinutesInput.value);

  // and setting the `totalSeconds` variable. 
  var totalSeconds = userMinWork * 60;
  console.log(totalSeconds);
  // use resetTimer to reset
  resetTimer();

  // for testing small numbers
  // totalSeconds = totalSeconds - 50;

  // begin the timer
  interval = setInterval(function(){
    // 2. When the timer starts, 
    // update the DOM every second to reflect the time left. 
    var timeLeft = totalSeconds - secondsElapsed;
    // use getMinutesFromSeconds(seconds);
    minutesDisplay.textContent = getMinutesFromSeconds(timeLeft);
    // use getRemainderFromSeconds(seconds);
    secondsDisplay.textContent = getRemainderFromSeconds(timeLeft);


    // 3. When the timer is finished, alert the user that it is time to take a break.
    if(timeLeft === 0){
      alert("Time to take a break!");
      stopTimer();

    }

    // need to calculate seconds elapsed
    secondsElapsed++;
    // have intervals at every 1000 milliseconds
  }, 1000);
}


function getMinutesFromSeconds(seconds){
  return Math.floor(seconds / 60);
  // return "25:00";
  // return "24:59";
}
function getRemainderFromSeconds(seconds){
  if(seconds % 60 < 10){
    return "0" + seconds % 60;
  }
  return seconds % 60;
}



function pauseTimer(){

}

function stopTimer(){
  resetTimer();
}

// reset the Timer
function resetTimer(){
  // Since we'll be using this function to reset as well, 
  // clear any existing intervals.
  clearInterval(interval);
  secondsElapsed = 0;
}

function changeTimerMode(){

}

playButton.addEventListener("click", startTimer);
