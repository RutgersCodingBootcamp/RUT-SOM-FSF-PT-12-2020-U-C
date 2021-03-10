const express = require("express");

const exphbs = require("express-handlebars");

const PORT = 8888;

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    { name: "pistachio", price: 11, awesomeness: 15 },
    {name: "cookie-dough", price: 7, awesomeness: 15}
  ];

app.get("/", (req, res) => {
    res.end("test");
});

app.get("/testhbs", (req, res) => {
    res.render("index");
});

app.get("/icecream/:name", (req, res) => {
    const name = req.params.name;
    // console.log(name);
    // get an array of a single object if we have an ice cream
    const found = icecreams.filter( icecream => icecream.name === name);
    if(found.length > 0){
        // found[0] is an object with keys that I can use with handlebars
        res.render("single", found[0]);
    }
    else{
        res.render("no-icecream");
    }
    
});

app.get("/icecreams", (req, res) => {
    res.render("all-icecreams", { 
        icecreams: icecreams
    });
});

app.listen(PORT, () => {
    console.log("server http://localhost:" + PORT);
});