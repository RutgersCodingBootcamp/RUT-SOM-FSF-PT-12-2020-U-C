// Dependencies
var express = require("express");
// handlebars middleware that is imported
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

// Data
var lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
  },
  {
    lunch: "Chicken Ceasar"
  }
];

// Routes
app.get("/weekday", function(req, res) {
  res.render("index", lunches[0]);
  // {
  //   lunch: "Beet & Goat Cheese Salad with minestrone soup."
  // }
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
  // {
  //   lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
  // }
});

app.get("/rabiah", function(req, res){
  res.render("index", lunches[2]);
})

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {
    foods: lunches,
    eater: "david"
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
