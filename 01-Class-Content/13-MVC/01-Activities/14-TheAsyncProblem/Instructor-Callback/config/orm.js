var connection = require("./connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      // if (err) throw err;
      // console.log(result);

      cb(err, result);
    });

    // if we dont put a return... return undefined
    // return undef
  }
};

module.exports = orm;
