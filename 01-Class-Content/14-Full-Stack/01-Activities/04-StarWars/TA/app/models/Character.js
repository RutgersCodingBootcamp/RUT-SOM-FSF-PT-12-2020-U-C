// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("character", {
  routeName: {
      type: Sequelize.STRING,
      allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  forcePoints: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;