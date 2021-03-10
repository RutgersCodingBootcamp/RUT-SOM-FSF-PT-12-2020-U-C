const mysql = require("mysql"); // createConnection, threadId
const express = require("express"); // port app.get app.listen
const exphbs = require("express-handlebars"); // app.engine app.set app.get render make index and main file

const PORT = 8888;

const connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "rootroot",
    "port": 3306,
    "database": "wishes_db"
});

connection.connect( () => {
    console.log("connected at " + connection.threadId);
});

const app = express();

// data parsing config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars config
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/", (req, res)=>{
    // res.send("word");
    connection.query("SELECT * FROM wishes", (err, results) => {
        if(err) console.err(err);
        
        res.render("index", {
            wishes: results
        });
    });
});

app.post("/", function(req, res) {
    // Test it
    // console.log('You sent, ' + req.body.task);
  
    // Test it
    // return res.send('You sent, ' + req.body.task);
  
    // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
    // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
    // https://en.wikipedia.org/wiki/SQL_injection
    // var userInput = "\"; DROP DATABASE task_saver; \"";
    // var dangerousConcat = "INSERT INTO tasks (tasks) VALUES (\"" + userInput + "\")";
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result) {
      if (err) throw err;
  
      // tells the browser to go back to the homepage
      res.redirect("/");
    });
  });

app.listen(PORT, () => {
    console.log("Server is listening... word ... http://localhost:" + PORT);
});