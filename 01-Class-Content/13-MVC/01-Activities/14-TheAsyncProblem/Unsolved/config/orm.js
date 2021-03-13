var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      // console.log(result);
      return result;
    });

    // if we dont put a return... return undefined
    // return undef
  }
};

module.exports = orm;
