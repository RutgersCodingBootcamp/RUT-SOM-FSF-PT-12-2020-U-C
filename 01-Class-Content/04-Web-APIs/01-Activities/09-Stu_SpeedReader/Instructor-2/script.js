var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var poemArr = poem.split(" ");
console.log(poemArr);
var timerTag = document.querySelector("#timer");
var mainTag = document.querySelector("#main-container");

function prepareRead() {
  // Create the countdown timer.
  console.log("timer started");
  var seconds = 5;
  var timerInterval = setInterval( function(){
    // console.log(seconds);
    timerTag.textContent = seconds + " until it starts";
    seconds--;
    if(seconds === 0){
      clearInterval(timerInterval);
      speedRead();
    }
  },
  1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  console.log("running speed read");
  // for(var i = 0; i < poemArr.length; i++){
  //   console.log(poemArr[i]);
  // }

  var i = 0;
  var printInterval = setInterval(function(){
    if(i < poemArr.length){
      console.log("i = " + i + " : poemArr[i] = " + poemArr[i]);
      mainTag.textContent = poemArr[i];
    }
    else{
      clearInterval(printInterval);
    }
    i++;
  }, 100);
  
  
}

prepareRead();