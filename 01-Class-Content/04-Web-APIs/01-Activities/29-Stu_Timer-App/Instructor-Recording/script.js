// var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

// keep track of the worktime status
var showingWorkTime;

// will keep track of the time for the timer
var totalSeconds = 0;
var secondsElapsed = 0;
// will hold my timer interval
var interval;

// will keep track if the last button pressed was pause
var isTimePaused = false;

function startTimer(event) {
  console.log(event.target);
  // Write code to start the timer here
  
  if(!isTimePaused){
    // 1. Create a function that initializes the timer by 
    // taking the minutes input from the user 
    // and setting the `totalSeconds` variable.
    // clear any existing intervals.
    if(!resetTimer()){
      alert("You have to put in a number for minutes");
      // exit immediately without running the code after this point
      return;
    }
  }
  isTimePaused = false;

  // immediately update the seconds
  nextSecond();
  if(secondsElapsed < totalSeconds){
    // use interval to continue updating
    interval = setInterval(nextSecond, 1000);
  }

}
function pauseTimer(event) {
  console.log(event.target);
  // Write code to pause the timer here
  // 1. The pause button should temporarily stop the timer. 
  // This means that if play is pressed again, 
  // the timer will continue where it left off.
  if(typeof interval !== 'undefined'){
    clearInterval(interval);
    // set time is paused so we don't reset the timer on play
    isTimePaused = true;
  }
}
function stopTimer(event) {
  console.log(event.target);
  // Write code to stop the timer here

  // 2. The stop button should reset the timer. 
  // If play is pressed again, the timer should start over.
  resetTimer();
}
function isWorking() {
  // Write code to check status here
  return statusToggle.checked;
}

// clears and resets the time
function resetTimer(){
  

  if(isWorking()){
    // if we don't have a valid time, return false;
    if(isNaN(parseInt(workMinutesInput.value))){
      // exit immediately without running the code after this point
      return false;
    }

    // 1. Create a function that initializes the timer by 
    // taking the minutes input from the user 
    // and setting the `totalSeconds` variable.
    totalSeconds = parseInt(workMinutesInput.value) * 60;
    showingWorkTime = true;
    
  }
  else{
    // if we don't have a valid time, return false;
    if(isNaN(parseInt(restMinutesInput.value))){
      // exit immediately without running the code after this point
      return false;
    }
    // use the rest input minutes
    totalSeconds = parseInt(restMinutesInput.value) * 60;
    showingWorkTime = false;
  }
  // need to clear the time elapsed
  secondsElapsed = 0;

  // clear the interval if it exists
  if(typeof interval !== 'undefined'){
    clearInterval(interval);
  }

  // if we have a valid time, return true
  return true;
}

// renders the time to the page
function renderTimer(){
  var diff = totalSeconds - secondsElapsed;
  var leading = "";
  // calculates the number of minutes based on the difference
  minutesDisplay.textContent = Math.floor(diff / 60);
  
  // calculates the number of the seconds based on modulus
  if(diff % 60 < 10){
    leading = "0";
  }
  secondsDisplay.textContent = leading + diff % 60;
}
// 2. When the timer starts, 
function nextSecond(){
  // update the display
  renderTimer();
  // 3. When the timer is finished, alert the user that it is time to take a break.
  if(secondsElapsed >= totalSeconds){
    clearInterval(interval);

    // want to use the exact value of the working toggle when you started the timer
    if(showingWorkTime){
      alert("Time to take a break");

    }
    else{
      alert("Time to get to work");
    }
  }
  else{
    // increment the seconds only when it is less than seconds elapsed
    secondsElapsed++;
  }
}
//   4. Whenever the switch is clicked, the DOM should update with the current status, and the timer should reset.
function statusChanged(){
  resetTimer();
  renderTimer();
}

// all the event listeners that will listen for clicks
playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
statusToggle.addEventListener("click", statusChanged);

workMinutesInput.addEventListener("change", function(event){
  console.log(event.target);
  // every time we change work minutes, save it to storage
  localStorage.setItem("work-minutes", workMinutesInput.value);
});

restMinutesInput.addEventListener("change", function(event){
  console.log(event.target);
  // every time we change rest minutes, save it to storage
  localStorage.setItem("rest-minutes", restMinutesInput.value);
});

// every time we load the page, get it from storage, if we have a value
if(localStorage.getItem("work-minutes") !== null){
  workMinutesInput.value = localStorage.getItem("work-minutes");
}
if(localStorage.getItem("rest-minutes") !== null){
  restMinutesInput.value = localStorage.getItem("rest-minutes");
}

// resets and reloads timer
statusChanged();

