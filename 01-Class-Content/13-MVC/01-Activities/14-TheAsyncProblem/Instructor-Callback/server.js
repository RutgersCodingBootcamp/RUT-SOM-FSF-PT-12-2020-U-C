var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up", (err, results) => {
    if(err) console.log(err);
    console.log(results);
});
