// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
let orm = {
  all: function(tableInput, cb) {
    let queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, values, cb) {
    let queryString = "INSERT INTO ?? SET ?";

    console.log(queryString);

    connection.query(queryString, [table,values], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of values would be {name: panther, sleepy: true}
  update: function(table, values, condition, cb) {
    let queryString = "UPDATE ?? SET ? WHERE ?";

    console.log(queryString);
    connection.query(queryString, [table, values, condition], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
