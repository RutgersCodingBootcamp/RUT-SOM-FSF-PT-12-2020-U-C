var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    // timeEl.style.fontSize = (40 - secondsLeft * 2) + "px";
    // timeEl.style.display = "none";
    // if(secondsLeft <= 3){
    //   timeEl.style.display = "block";
    // }

    // console.log(secondsLeft);

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();