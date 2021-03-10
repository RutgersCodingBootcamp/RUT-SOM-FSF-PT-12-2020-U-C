const express = require("express");

const app = express();

const exphbs = require("express-handlebars");

const PORT = 8888;

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 }
  ];

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); // changes the render function

app.get("/", (req, res)=>{
    res.send("It's cold in here. Server is up.");
});

app.get("/icecream/:name", (req, res) => {
    const {name} = req.params;
    // res.send(name);
    // gets an array of a single object hopefully???
    const found = icecreams.filter( icecream => icecream.name === name );
    // we need to give handlebars an object with keys, key word being "keys"
    if(found.length > 0){
        res.render("single", found[0]);
    }
    else{
        res.render("no-icecream-for-you");
    }
});

app.get("/icecreams", (req, res) => {
    res.render("all-icecreams", {
        oops: icecreams
    });
});

app.listen(PORT, () => {
    console.log("It's cold in here with all the icecream: http://localhost:" + PORT);
});
