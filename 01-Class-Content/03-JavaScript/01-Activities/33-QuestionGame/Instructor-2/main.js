var questions = [
    {
        q: "Is this for the question?",
        a: true
    },
    {
        q: "Is this this an object?",
        a: true
    },
    {
        q: "How do you fix a broken computer? Is it 'turn it off and on again'?",
        a: true
    },
    {
        q: "Do we need 10 questions?",
        a: true
    },
    {
        q: "How many licks to the center of a tootsie pop? Do we really know",
        a: false
    }
];

var score = 0;

for(var i = 0; i < questions.length; i++){
    // console.log(questions[i]);
    var user = confirm(questions[i].q);
    if(user === questions[i].a){
        score++;
        alert("Correct!");
    }
    else{
        alert("Incorrect!");
    }
}

alert("You scored " + score + " out of " + questions.length);
