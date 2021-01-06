// var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
// var poemArr = poem.split(" ");

var questionIndex = 0;
var questionArr = [
  {
    question: "Who controls the world?",
    answerIndex: 0,
    choices: [
      "Peter",
      "Ernesto",
      "Ramya",
      "Ivan"
    ]
  },
  {
    question: "How to fix my computer",
    answerIndex: 3,
    choices: [
      "Ask Peter",
      "Kick it",
      "Find Ironman",
      "Ask Elon to buy you a new computer"
    ]
  }
]

console.log(questionArr);
var containerTag = document.querySelector("#container");
var timerTag = document.querySelector("#timer");
// var time = prompt("How many milliseconds between words");

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
      showNextQuestion();
    }
    //  subtract one second
    seconds--;
  }, 1000);//every second
  
}

function showNextQuestion() {
  // Print words to the screen one at a time.
  console.log("do showNextQuestion");
  // for(var i = 0; i < poemArr.length; i++){
  //   console.log(poemArr[i]);
  // }
  // var i = 0;

  var seconds = 60;
  // make sure it is empty
  containerTag.textContent = "";

  // 
  //{
  //   question: "Who controls the world?",
  //   answerIndex: 0,
  //   choices: [
  //     "Peter",
  //     "Ernesto",
  //     "Ramya",
  //     "Ivan"
  //   ]
  // },
  // for(var questionIndex = 0; questionIndex < questionArr.length; questionIndex++){
  //   console.log(questionArr[questionIndex]);
  // }
  console.log(questionArr[questionIndex]);

  console.log(questionArr[questionIndex].question);
  console.log(questionArr[questionIndex].choices);
  
  var questionTag = document.createElement("h1");
  containerTag.appendChild(questionTag);
  questionTag.textContent = questionArr[questionIndex].question;

  var choiceListTag = document.createElement("ol");
  containerTag.appendChild(choiceListTag);


  var questionInterval = setInterval(function(){
    //  print the number of seconds
    // console.log(seconds);
    //  should display on the page
    timerTag.textContent = seconds + " left to answer";
    if(seconds === 0){
      // clear timer
      timerTag.textContent = " ";
      // stop timer
      clearInterval(questionInterval);

      // call the next function for speed reading
      showNextQuestion();
    }
    //  subtract one second
    seconds--;
  }, 1000);

  for(var i = 0; i < questionArr[questionIndex].choices.length; i++){
    var choiceTag = document.createElement("li");
    choiceListTag.appendChild(choiceTag);
    choiceTag.textContent = questionArr[questionIndex].choices[i];

    choiceTag.addEventListener("click", function(){
      clearInterval(questionInterval);
      questionIndex++;
      showNextQuestion();
    });
  }




  // var wordInterval = setInterval(function(){
  //   if(i < poemArr.length){
  //     containerTag.textContent = poemArr[i];
  //     console.log(poemArr[i]);
  //   }
  //   else{
  //     clearInterval(wordInterval);
  //   }
  //   i++;
  // }, time);
}

// calling my function prepareRead
prepareRead();