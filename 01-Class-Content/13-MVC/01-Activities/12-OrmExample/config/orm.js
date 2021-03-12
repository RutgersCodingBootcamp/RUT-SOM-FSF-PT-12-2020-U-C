var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    // SELECT * FROM pets WHERE animal_name = "Rachel"
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    // SELECT animal_name FROM pets ORDER BY price DESC;
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    // SELECT buyer_name, COUNT(buyer_name) AS count FROM buyers LEFT JOIN pets ON pets.buyer_id= buyers.id GROUP BY buyer_name ORDER BY count DESC LIMIT 1"

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  searchColumn: function(table, tableCol, searchTerm){
    var queryString = "SELECT * FROM ?? WHERE ?? REGEXP ?";
    connection.query(queryString, [table, tableCol, searchTerm], (err, result) => {
      if(err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
