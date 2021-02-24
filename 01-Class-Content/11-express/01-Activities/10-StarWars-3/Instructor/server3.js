// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "peterwankenobi",
  name: "Peter Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do?
// this route of "/api/characters" retrieves all the characters and their data
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do?
// this route get the word "character" and turns in a property of req.params
// using this, it will put the value of character into that property
app.get("/api/characters/:character", function(req, res) {
  // What does this code do?
  // assigning the "character"'s value to the variable chosen
  var chosen = req.params.character;
  console.log(chosen);

  // What does this code do?
  // loops through all the data to send the character back to the client
  // the return in the middle of the for loop will end the function because you have finished doing the response
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  // ending the function using return
  // sending the client a response that says "No character found"
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
