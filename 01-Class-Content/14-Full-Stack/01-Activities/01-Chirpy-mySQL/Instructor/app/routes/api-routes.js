// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/chirps", (req, res) => {
    // res.send("It's Ernesto's birthday!");
    connection.query("SELECT * FROM chirps", (error, result) => {
      if(error) return res.status(500);

      //console.log(result);
      // // used this to test the frontend
      // res.json([{
      //   author: "Test",
      //   body: "Test message",
      //   created_at: "2021-01-01 01:01"
      // }]);
      res.json(result);
    });
    
  });
  // Add a chirp
  app.post("/api/chirp", (req, res) => {
    console.log("We got a post");
    console.log(req.body);

    connection.query("INSERT chirps SET ?", [req.body], (error, result) => {
      if(error) return res.status(500);

      res.json(true);
    });
    // res.send("true");
  });
};
