// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

const Character = require("../models/Character");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  // the question mark means the wildcard parameter is optional
  app.get("/api/:characters?", function(req, res) {

    // if Character..
    if(req.params.characters){
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then( data => {
        res.json(data);
      });
      // res.json({
      //   name: "Peter Obi Wan Kenobi",
      //   role: "Jedi TA",
      //   age: 1000,
      //   forcePoints: 10000
      // });
    }
      // then single Object
    else{
    // else
      Character.findAll({}).then( data => {
        res.json(data);
      });
      //   array of objects
      // res.json([{
      //   name: "Peter Obi Wan Kenobi",
      //   role: "Jedi TA",
      //   age: 1000,
      //   forcePoints: 10000
      // }]);
    }
      // // If the user provides a specific character in the URL...
    // if (req.params.characters) {

    //   // Then display the JSON for ONLY that character.
    //   // (Note how we're using the ORM here to run our searches)
    //   orm.searchCharacter(req.params.characters, function(data) {
    //     res.json(data);
    //   });
    // }

    // // Otherwise...
    // else {
    //   // Otherwise display the data for all of the characters.
    //   // (Note how we're using the ORM here to run our searches)
    //   orm.allCharacters(function(data) {
    //     res.json(data);
    //   });
    // }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    const character = req.body;
    console.log(character);
    // create our route
    character.routeName = character.name.trim().replace(/\s+/g, "-").toLowerCase();
    Character.create(character)
    .then( result => {
      console.log(result);
    })
    .catch( error => {
      console.log(error);
    });

    // // Take the request...
    // var character = req.body;

    // // Then send it to the ORM to "save" into the DB.
    // orm.addCharacter(character, function(data) {
    //   console.log(data);
    // });

  });
};
