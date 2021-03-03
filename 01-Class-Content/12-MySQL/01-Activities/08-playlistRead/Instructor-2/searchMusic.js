// require the mysql driver for your database
const mysql = require("mysql");


let term = process.argv[2];

// connection config string???
const connection = mysql.createConnection({
    host: "localhost",

    user: "root",

    password: "rootroot",

    port: 3306,

    database: "playlist_db"
});

connection.connect( (err) => {
    if(err) throw err;

    console.log("Connection id: " + connection.threadId);
    // connection.end();
    search();
});

function search(){
    // connection.query(`SELECT * FROM songs WHERE genre = "${term}" OR artist = "${term}" OR title = "${term}"`, (err, results) => {
    //     if(err) console.error(err);
    //     console.log(results);
    //     connection.end();
    // });
    

    connection.query(`SELECT * FROM songs WHERE "${term}" IN (artist, title, genre);`, (err, results) => {
        if(err) console.error(err);
        console.log(results);
        connection.end();
    });
}