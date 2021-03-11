# code along notes

## create our files

## install our modules

```
npm init -y; npm i mysql express express-handlebars
```

## create our schema with queries and execute the queries

```
-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS wishes_db;
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE wishes_db;
USE wishes_db;
-- Create the table tasks.
CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  wish varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
```

## add code to test our server is responding and require mysql/express/express-handlebars

```
const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 8888;
const app = express();
app.get("/", (req, res)=>{
    res.send("word");
});
app.listen(PORT, () => {
    console.log("Server is listening... word ... http://localhost:" + PORT);
});
```

## test our mysql module using the create connection

```
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
```

## create index.handlebars main.handlebars configure handlebars and render index

```
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.get("/", (req, res)=>{
    // res.send("word");
    res.render("index");
});
```

## update index file for wishes

```
<h1>Wish Saver</h1>
<h3>Save the wishes</h3>
<ul>
  {{#each wishes}}
  	<li>
  	   <p>ID: {{this.id}}</p>
       <p>Wish: {{this.wish}}</p>
  	</li>
  {{/each}}
</ul>
<form action="/" method="POST">
	<textarea type="text" name="wish"></textarea>
	<button type="submit">Submit</button>
</form>
```

## create post route

```
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
```

## configure server to do data parsing

This can be done before the post route. However, it was better that we see why we need it before putting in the configuration steps below.

```
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
```