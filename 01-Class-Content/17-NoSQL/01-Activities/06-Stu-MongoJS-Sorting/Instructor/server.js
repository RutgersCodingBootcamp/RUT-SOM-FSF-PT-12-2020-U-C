const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "zoo";
const collections = ["animals"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.animals.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// TODO: Implement the remaining two routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"
app.get("/name", (req, res) => {
  db.animals.find({}).sort({name: 1}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});


// 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"
app.get("/weight", (req, res) => {
  db.animals.find().sort({weight: -1}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on http://localhost:3000 !");
});
