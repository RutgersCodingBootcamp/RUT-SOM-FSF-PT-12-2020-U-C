var interval;
var totalSeconds;
var elapsedSeconds;

var renderTimer = function(){
    document.querySelector("#display").textContent = totalSeconds - elapsedSeconds;
}

var nextSecond = function(){
    elapsedSeconds++;
    renderTimer();
    if(elapsedSeconds >= totalSeconds){
        clearInterval(interval);
    }
}
var addSixtySeconds = function(){
    elapsedSeconds -= 60;
    renderTimer();
    if(elapsedSeconds >= totalSeconds){
        clearInterval(interval);
    }
}
var start = function(event){
    console.log(event.target);
    totalSeconds = 300;
    elapsedSeconds = 0;
    renderTimer();
    interval = setInterval(nextSecond, 1000);
    interval = setInterval(addSixtySeconds, 10000);
}
document.querySelector("button").addEventListener("click", start);