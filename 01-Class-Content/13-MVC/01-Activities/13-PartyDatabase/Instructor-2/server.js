const orm = require("./config/orm");

// -- * Console log all the party names.
// SELECT party_name FROM parties; SELECT ?? FROM ??
orm.select("party_name", "parties");

// -- * Console log all the client names.
// SELECT client_name FROM clients; SELECT ?? FROM ??
orm.select("client_name", "clients");

// -- * Console log all the parties that have a party-type of grown-up.
// ?? -> column or structure 
// ? -> value like string or number or boolean or object(key/value pairs)
// SELECT * FROM parties WHERE party_type = "grown-up"; 
// SELECT * FROM ?? WHERE ?? = ? <-- limited to a single filter
// SELECT * FROM ?? WHERE ? <-- this one is better because you can do multiple filters through the object
orm.selectWhere("parties", {"party_type": "grown-up"});

// -- * Console log all the clients and their parties.
// SELECT * FROM clients JOIN parties ON clients.id = client_id;
// SELECT * FROM ?? JOIN ?? ON ?? = ??;

orm.selectJoin("clients", "parties", "clients.id", "client_id");

orm.closeConnection();