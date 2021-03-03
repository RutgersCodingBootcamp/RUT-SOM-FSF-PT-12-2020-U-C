
const mysql = require("mysql");
let artist = process.argv[2];
// driver connection config???
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "playlist_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection(){
    // let artist = "The Beatles"
    connection.query(`SELECT * FROM songs WHERE artist = "${artist}" OR genre = "${artist}" OR title = "${artist}"`, (err, results) => {
        if(err) console.error(err);
        console.log(results);
        connection.end();
    });
}
