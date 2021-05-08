const mysql = require('mysql');
const express = require('express');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "seinfield_db"
});

const app = express();
const PORT = 8888;

app.get("/", (req, res) => {
    connection.query("SELECT * FROM actors", (err, results) => {
        if(err) {
            res.status(500);
            res.send("Server Error");
            return; // end the function
        };
        console.log(results);
        let list = results.map(v => `<li>${v.name} (${v.id})</li>`).join("");
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>List of Actors</h1>
            <ul>
                ${list}
            </ul>
        </body>
        </html>`);

    // check * Query the database CRUD
    // check * HTML template
    // check * route
    // check * response

    });
    
});

app.listen(PORT, () => {
    console.log("Hey, listen! - http://localhost:" + PORT);
});