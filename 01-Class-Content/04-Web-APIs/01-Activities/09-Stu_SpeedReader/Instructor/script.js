var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var poemArr = poem.split(" ");
console.log(poemArr);
var containerTag = document.querySelector("#container");
var timerTag = document.querySelector("#timer");
var time = prompt("How many milliseconds between words");

function prepareRead() {
  // Create the countdown timer.
  // console.log("running my prepare read timer");
  
  var seconds = 3;
  var timerInterval = setInterval(function(){
    //  print the number of seconds
    console.log(seconds);
    //  should display on the page
    timerTag.textContent = seconds + " left until the poem starts";
    if(seconds === 0){
      // clear timer
      timerTag.textContent = " ";
      // stop timer
      clearInterval(timerInterval);

      // call the next function for speed reading
      speedRead();
    }
    //  subtract one second
    seconds--;
  }, 1000);//every second
  
}

function speedRead() {
  // Print words to the screen one at a time.
  console.log("do speedRead");
  // for(var i = 0; i < poemArr.length; i++){
  //   console.log(poemArr[i]);
  // }
  var i = 0;
  var wordInterval = setInterval(function(){
    if(i < poemArr.length){
      containerTag.textContent = poemArr[i];
      console.log(poemArr[i]);
    }
    else{
      clearInterval(wordInterval);
    }
    i++;
  }, time);
}

// calling my function prepareRead
prepareRead();