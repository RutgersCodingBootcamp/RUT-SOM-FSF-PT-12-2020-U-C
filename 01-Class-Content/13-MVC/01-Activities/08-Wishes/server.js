const express = require("express");  // createConnection, threadId
const mysql = require("mysql"); // port app.get app.listen
const exphbs = require("express-handlebars"); // app.engine app.use res.render

const app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8888;

const connection = mysql.createConnection({
    host        : "localhost",
    port        : 3306,
    user        : "root",
    password    : "password",
    database    : "wishes_db"
});

connection.connect( () => {
    console.log("connect at " + connection.threadId);
})

app.get("/", (req, res) => {
    // res.send("word");
    connection.query("SELECT * FROM wishes", (err, results) => {
        if(err) throw err;
        res.render("index", {
            wishes: results
        });
    });
    
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result){
        if (err) throw err;
    });
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:" + PORT)
})

