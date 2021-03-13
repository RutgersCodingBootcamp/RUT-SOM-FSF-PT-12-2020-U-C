const orm = require("./config/orm");
// --  * Console log all the party names.
// SELECT party_name FROM parties; SELECT ?? FROM ??
// --  * Console log all the client names.
// SELECT client_name FROM clients; SELECT ?? FROM ??
// --  * Console log all the parties that have a party-type of grown-up.
// SELECT party_name FROM parties WHERE party_type = "grown-up"; // 1 SELECT ?? FROM ?? WHERE ?? = ?
// --  * Console log all the clients and their parties.
// SELECT client_name, party_name FROM clients c JOIN parties p ON c.id = p.client_id; //1 
// SELECT ??, ?? FROM ?? JOIN ?? ON ?? = ??
orm.select("party_name", "parties");


orm.select("client_name", "clients");

orm.selectWithFilter("party_name", "parties", "party_type", "grown-up");


orm.selectJoin("client_name", "party_name", "clients", "parties", "clients.id", "client_id");
orm.closeConnection();