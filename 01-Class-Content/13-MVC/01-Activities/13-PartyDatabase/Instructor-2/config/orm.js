const connection = require("./connection");

// -- * Console log all the party names.
// SELECT party_name FROM parties; SELECT ?? FROM ??

// -- * Console log all the client names.
// SELECT client_name FROM clients; SELECT ?? FROM ??

// -- * Console log all the parties that have a party-type of grown-up.
// ?? -> column or structure 
// ? -> value like string or number or boolean or object(key/value pairs)
// SELECT * FROM parties WHERE party_type = "grown-up"; 
// SELECT * FROM ?? WHERE ?? = ? <-- limited to a single filter
// SELECT * FROM ?? WHERE ? <-- this one is better because you can do multiple filters through the object

// -- * Console log all the clients and their parties.
// SELECT * FROM clients JOIN parties ON clients.id = client_id;
// SELECT * FROM ?? JOIN ?? ON ?? = ??;


// other example options
// SELECT * FROM clients JOIN parties ON clients.id = parties.client_id;
// SELECT * FROM clients c JOIN parties p ON c.id = p.client_id;
// SELECT * FROM clients AS cli JOIN parties AS par ON cli.id = par.client_id;



module.exports = {
    select: function(col1, table1){
        let query = "SELECT ?? FROM ??";
        connection.query(query, [col1, table1], (err, results) => {
            if(err) console.log(err);

            console.log(results);
        });
    },
    selectWhere: function(table1, filters){
        let query = "SELECT * FROM ?? WHERE ?";
        connection.query(query, [table1, filters], (err, results) => {
            if(err) console.log(err);

            console.log(results);
        });
    },

    selectJoin: function(table1, table2, onCol1, onCol2){
        let query = "SELECT * FROM ?? JOIN ?? ON ?? = ??";

        connection.query(query, [table1, table2, onCol1, onCol2], (err, results) => {
            if(err) console.log(err);

            console.log(results);
        });
    },
    

    closeConnection: function(){
        connection.end();
    }
};