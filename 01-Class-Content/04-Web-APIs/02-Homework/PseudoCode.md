# PseudoCode

```

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
click handler is triggered on the start button
timer starts
question shows up on the page
show the multiple choice answers


WHEN I answer a question
THEN I am presented with another question
click handler is triggered on what the user clicked on
shows if the answer is correct or not correct
remove the last question
remove the last answers
after a short time,
remove incorrect/correct,
show the new question


WHEN I answer a question incorrectly
THEN time is subtracted from the clock
if the answer is incorrect,
decrement the timer's time


WHEN all questions are answered or the timer reaches 0
THEN the game is over
stop the timer
remove the question from display
remove incorrect/correct
show quiz results

WHEN the game is over
THEN I can save my initials and score
show a text box for putting my name in
take the current high score from storage
modify the high score to include the user
save the current high score into storage
remove input form
show the high score page

```

## Some of the things that I need are...

* Array of questions
* Timer
* Click handlers (functions that do click events)
* HTML templates for Right/Wrong, Questions, Answers, High scores
* Stylesheets for each template
* Array of objects for the high scores (Scoreboard and a way to save it)
