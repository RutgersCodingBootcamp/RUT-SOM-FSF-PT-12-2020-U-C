var connection = require("./connection.js");

// --  * Console log all the party names.
// SELECT party_name FROM parties; SELECT ?? FROM ??
// --  * Console log all the client names.
// SELECT client_name FROM clients; SELECT ?? FROM ??
// --  * Console log all the parties that have a party-type of grown-up.
// SELECT party_name FROM parties WHERE party_type = "grown-up"; // 1 SELECT ?? FROM ?? WHERE ?? = ?
// --  * Console log all the clients and their parties.
// SELECT client_name, party_name FROM clients c JOIN parties p ON c.id = p.client_id; //1 
// SELECT ??, ?? FROM ?? JOIN ?? ON ?? = ??

module.exports = {
    select: function(col1, table1){
        let query = "SELECT ?? FROM ??";
        connection.query(query, [col1, table1], (err, results) => {
            if(err) console.log(err);
            console.log(results);
        });
    },
    selectWithFilter: function(col1, table1, colFilter1, colValue1){
        let query = "SELECT ?? FROM ?? WHERE ?? = ?";
        connection.query(query, [col1, table1, colFilter1, colValue1], (err, results) => {
            if(err) console.log(err);
            console.log(results);
        });
    },
    selectJoin: function(col1, col2, table1, table2, onCol1, onCol2){
        let query = "SELECT ??, ?? FROM ?? JOIN ?? ON ?? = ??";
        connection.query(query, [col1, col2, table1, table2, onCol1, onCol2], (err, results) => {
            if(err) console.log(err);
            console.log(results);
        });
    },
    

    closeConnection: function(){
        connection.end();
    }
};