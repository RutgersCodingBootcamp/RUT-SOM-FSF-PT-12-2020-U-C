var interval;
var interval2;
var totalSeconds;
var elapsedSeconds;

var renderTimer = function(){
    // put time on page
    document.querySelector("#display").textContent = totalSeconds - elapsedSeconds;
}

var nextSecond = function(){
    // subtract time
    elapsedSeconds++;
    renderTimer();
    // stop the timer when time runs out
    if(elapsedSeconds >= totalSeconds){
        clearInterval(interval);
        clearInterval(interval2);
    }
}
var addSixtySeconds = function(){
    // add time
    elapsedSeconds -= 60;
    renderTimer();
    // stop the timer when time runs out
    if(elapsedSeconds >= totalSeconds){
        clearInterval(interval);
        clearInterval(interval2);
    }
}
var start = function(event){
    console.log(event.target);
    // reset time
    totalSeconds = 300;
    elapsedSeconds = 0;
    // clear any intervals that may already be there
    // fixes time jumping on my button (only want the intervals that I need for my timer)
    if(interval){
        clearInterval(interval);
    }
    if(interval2){
        clearInterval(interval2);
    }

    renderTimer();
    // start my timers
    interval = setInterval(nextSecond, 1000);
    interval2 = setInterval(addSixtySeconds, 10000);
}
// add something to listen for clicks
document.querySelector("button").addEventListener("click", start);