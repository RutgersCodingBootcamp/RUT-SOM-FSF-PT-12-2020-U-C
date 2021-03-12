// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
app.get("/:operation/:firstNum/:secondNum", function(req, res) {

  // Parameters are received from the URL
  var operation = req.params.operation;

  // Parameters are converted to integers
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;

  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  case "add":
  case "+": // Bonus.  Example:  http://localhost:3002/+/6/4 --> 10
    result = firstNum + secondNum;
    break;
  case "subtract":
  case "-": // Bonus.  Example:  http://localhost:3002/-/6/4 --> 2
    result = firstNum - secondNum;
    break;
  case "multiply":
  case "*": // Bonus.  Example:  http://localhost:3002/*/3/4 --> 12
    result = firstNum * secondNum;
    break;
  case "divide":
  case "/": // Bonus.  This char has to be escaped in the url since slashes separate params
    // Example:  http://localhost:3002/%2F/14/2 --> 7
    result = firstNum / secondNum;
    break;
  default:
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
