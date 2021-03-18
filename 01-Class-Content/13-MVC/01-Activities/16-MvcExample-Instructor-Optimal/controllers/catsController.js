const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const cat = require("../models/cat.js");
const dog = require("../models/dog.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/dogs", function(req, res){
  dog.all(function(data){
    var hbsObject = {
      dogs: data
    };
    console.log(hbsObject);
    res.render("index-dogs", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create({name: req.body.name, sleepy: req.body.sleepy}, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  const condition = {id: req.params.id};

  console.log("condition", condition);
  console.log(req.body.sleepy);
  const updateValues = {
    // change boolean to tiny int
    sleepy: (req.body.sleepy === "true" ? 1 : 0)
  };
  console.log(updateValues);
  cat.update(
    updateValues,
    condition,
    function(result) {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
