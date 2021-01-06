var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    // console.log("this anonymous callback function ran");
    secondsLeft--;
    // console.log("secondsLeft:" + secondsLeft);
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    timeEl.style.fontSize = (40 - secondsLeft * 2) + "px"; // 40px 
    // timeEl.style.fontSize = 40 + "px"; // this is a string
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

//var timerTest = setInterval(function(){console.log(Math.random())}, 500);
//clearInterval(timerTest);
var str = "The yankees are great but the Mets are better. Come on!";
var i = 0;
var list = str.split(" ");
var timerInt = setInterval(function(){
    if(i < list.length){
        console.log(list[i]);
    }
    else{
        clearInterval(timerInt);
    }
    
    i++;
}, 1000);