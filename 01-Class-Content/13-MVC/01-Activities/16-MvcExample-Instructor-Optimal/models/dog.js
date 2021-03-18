// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var dog = {
  all: function(cb) {
    orm.all("dogs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(values, cb) {
    orm.create("dogs", values, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("dogs", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = dog;
