var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
  // look at the req.params and pull any data needed ??? -- not needed for this
  // parse the body of data incoming from the request ??? -- not needed for this
  // the query SELECT * FROM quotes;
  connection.query("SELECT * FROM quotes", (err, results)=> {
    if(err){
      res.status(500).end();
    }
    // errors ???
    // render???
    res.render("index", { quotes: results });
  });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {
  // look at the req.params and pull any data needed
  let id = parseInt(req.params.id);
  // parse the body of data incoming from the request ??? -- not needed for this
  // query SELECT * FROM quotes  WHERE id = 1;
  connection.query("SELECT * FROM quotes WHERE id = ?", [id], (err, results)=> {
    
    // error handling
    if(err) return res.status(500).end();
    
    // render
    if(results.length === 0){
      return res.status(404).end();
    }
    console.log(results[0]);
    res.render("single-quote", results[0]);
    // res.status(500).end();
  });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  // look at the req.params and pull any data needed - not needed
  // parse the body of data incoming from the request
  // req.body.value

  // query INSERT
  // INSERT quotes (author, quote) VALUES ("Peter Tumulty", "My quote");

// INSERT quotes SET author = "Mike Tython", quote = "Everybody has a plan until they get punched in the mouth.";
  connection.query("INSERT quotes SET ?", [req.body], (err, results) => {
    // error
    if(err) return res.status(500).end();

    // render
    res.json({ id: results.insertId });
  });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  // look at the req.params and pull any data needed
  // req.params.id
  // parse the body of data incoming from the request ??? -- not needed for this
  // query DELETE FROM quotes WHERE id = 8;
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], (err, results) => {
    if(err) return res.status(500).end();
    // errors
    // render
    res.json(true);
  });
  
});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  // look at the req.params and pull any data needed
  // req.params.id
  // parse the body of data incoming from the request
  // req.body.value?

  // query UPDATE quotes 
  // SET author = "Mike Tyson", quote = "Everybody has a plan until they get punched in the mouth!" 
  // WHERE id = 9;
  connection.query("UPDATE quotes SET author = ?, quote = ? WHERE id = ?;", 
  [req.body.author, req.body.quote, req.params.id],
  (err, results) => {
    if(err) return res.status(500).end();

    res.json(results);
  });
});
app.get("/api/search/:term", function(req, res) {
  // look at params
  // req.params.term
  // no body on this route
  // query SELECT * FROM quotes WHERE "Peter" IN (author, quote);
// SELECT * FROM quotes WHERE author REGEXP "Peter" OR quote REGEXP "Peter";
  connection.query("SELECT * FROM quotes WHERE author REGEXP ? OR quote REGEXP ?", 
  [req.params.term, req.params.term], 
  (err, results)=>{
    if(err) return res.status(500).end();

    res.json(results);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
