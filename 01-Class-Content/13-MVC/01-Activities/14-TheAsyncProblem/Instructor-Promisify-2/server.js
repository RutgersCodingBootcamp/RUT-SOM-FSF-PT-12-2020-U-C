var orm = require("./config/orm.js");


// orm.selectWhere("parties", "party_type", "grown-up", (err, results) => {
//     if(err) console.log(err);
//     console.log(results);
// });

orm.selectWherePromise("parties", "party_type", "grown-up")
.then( results => console.log(results))
.then( results => yournextpromise(something));