# Node + MySQL PopQuiz

## Using the `terminal` or your favorite MySQL GUI
1. Connect to MySQL server 
mysql -u root -p
2. Create a new Database
CREATE DATABASE some_new_db;
3. Create a new table with a primary key that auto-increments, and a text field
use some_new_db;
CREATE TABLE table_name(
    id INTEGER auto_increment NOT NULL,
    message VARCHAR(187),
    PRIMARY KEY(id)
);
4. Insert 3 Rows into your new table
INSERT table_name (message) VALUES ("Message and"), ("Message 2"), ("One last message");

## Using Node / IDE of your choice
1. Create a package.json
npm init -y
2. Require `mysql`
npm i mysql -S

const mysql = require("mysql");
3. Connect to MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "...",
    port: 3306,
    database: "db_name"
});
4. Print the 3 rows of data to the `console`
connection.query("SELECT * FROM table_name", (err, results) => {
    console.log(results);
});
